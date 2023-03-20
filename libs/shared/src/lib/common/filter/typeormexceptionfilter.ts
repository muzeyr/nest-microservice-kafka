import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpServer,
  Inject,
  Logger,
  Optional,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { EntityNotFoundError, QueryFailedError } from 'typeorm';
import { TypeORMError } from 'typeorm/error/TypeORMError';

@Catch(QueryFailedError, EntityNotFoundError, TypeORMError)
export class TypeOrmExceptionFilter implements ExceptionFilter {
  private readonly logger: Logger = new Logger(this.constructor.name);

  @Optional()
  @Inject()
  protected readonly httpAdapterHost?: HttpAdapterHost;

  constructor(protected readonly applicationRef?: HttpServer) {}

  catch(exception: any, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const applicationRef =
      this.applicationRef ||
      (this.httpAdapterHost && this.httpAdapterHost.httpAdapter);
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
    this.logger.error(JSON.stringify(requestInformation), '', 'TypeOrm');
    response.code(500).send({
      statusCode: 500,
    });
  }
}
