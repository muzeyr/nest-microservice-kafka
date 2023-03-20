import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpServer,
  Inject,
  Logger,
  Optional,
} from '@nestjs/common';
import { isObject } from '@nestjs/common/utils/shared.utils';
import { HttpAdapterHost } from '@nestjs/core';
import { isArray } from 'class-validator';
import { FindsBaseException } from '../../api/authentication/exception/findsBaseException';

@Catch(FindsBaseException, HttpException)
export class AllExceptionFilter implements ExceptionFilter<FindsBaseException> {
  private readonly logger: Logger = new Logger(this.constructor.name);

  @Optional()
  @Inject()
  protected readonly httpAdapterHost?: HttpAdapterHost;

  constructor(protected readonly applicationRef?: HttpServer) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const applicationRef =
      this.applicationRef ||
      (this.httpAdapterHost && this.httpAdapterHost.httpAdapter);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const method = request.method;
    const url = request.url;
    const requestInformation = {
      method: method,
      url: url,
      body: request.body,
      headers: request.headers,
      queryString: request.queryString,
      exception: exception,
      user: request.user,
    };
    this.logger.error(
      JSON.stringify(requestInformation),
      null,
      'All Exceptions',
    );
    if (exception instanceof BadRequestException) {
      this.handleBadRequestException(exception, applicationRef, host, response);
    } else if (exception instanceof FindsBaseException) {
      this.handleFindsException(exception, applicationRef, host, response);
    } else if (exception instanceof HttpException) {
      this.handleHttpException(exception, applicationRef, host, response);
    } else {
      this.handleOtherExceptions(response, exception, request);
    }
  }

  private handleOtherExceptions(response, exception: unknown, request) {
    response.code(500).send({
      exceptionType: typeof exception,
      statusCode: 500,
      message: exception,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }

  private handleHttpException(
    exception: HttpException,
    applicationRef: HttpServer,
    host: ArgumentsHost,
    response,
  ) {
    const res = exception.getResponse();
    const message = isObject(res)
      ? res
      : {
          statusCode: exception.getStatus(),
          message: res,
        };
    if (applicationRef) {
      applicationRef.reply(
        host.getArgByIndex(1),
        message,
        exception.getStatus(),
      );
    } else {
      response.code(exception.getStatus()).send(message);
    }
  }

  private handleFindsException(
    exception: FindsBaseException,
    applicationRef: HttpServer,
    host: ArgumentsHost,
    response,
  ) {
    const message = exception.convertToResponseModel();
    if (applicationRef) {
      applicationRef.reply(
        host.getArgByIndex(1),
        message,
        exception.getStatus(),
      );
    } else {
      response.code(exception.getStatus()).send(message);
    }
  }

  private handleBadRequestException(
    exception: BadRequestException,
    applicationRef: HttpServer,
    host: ArgumentsHost,
    response,
  ) {
    const res = exception.getResponse();
    let realError;
    if (typeof res === 'string') {
      realError = JSON.parse(res);
    } else {
      realError = res;
    }
    let errors: any[];
    if (isArray(realError.message)) {
      errors = realError.message.map((item) => {
        return {
          code: -1,
          message: item,
        };
      });
    } else {
      errors = [{ code: -1, message: realError.message }];
    }
    const message = {
      statusCode: exception.getStatus(),
      errors: errors,
      message: 'Bad Request',
    };
    if (applicationRef) {
      applicationRef.reply(
        host.getArgByIndex(1),
        message,
        exception.getStatus(),
      );
    } else {
      response.code(exception.getStatus()).send(message);
    }
  }
}
