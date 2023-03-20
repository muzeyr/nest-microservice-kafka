import {
  Injectable,
  ArgumentMetadata,
  BadRequestException,
  ValidationPipe,
  UnprocessableEntityException,
} from '@nestjs/common';
import { ValidationPipeOptions } from '@nestjs/common/pipes/validation.pipe';

// noinspection JSMethodCanBeStatic
export class ValidateInputPipe extends ValidationPipe {
  constructor(options?: ValidationPipeOptions) {
    super();
  }

  public async transform(value, metadata: ArgumentMetadata) {
    try {
      return await super.transform(value, metadata);
    } catch (e) {
      if (e instanceof BadRequestException) {
        throw new UnprocessableEntityException(this.handleError(e.message));
      }
    }
  }

  private handleError(errors) {
    return errors.map((error) => error.constraints);
  }
}
