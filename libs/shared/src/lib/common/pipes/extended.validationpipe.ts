import { ArgumentMetadata, ValidationPipe } from '@nestjs/common';
import { ValidationPipeOptions } from '@nestjs/common/pipes/validation.pipe';

export class FindsValidationPipe extends ValidationPipe {
  constructor(options?: ValidationPipeOptions) {
    super(options);
  }

  protected toValidate(metadata: ArgumentMetadata): boolean {
    return super.toValidate(metadata);
  }

  transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    return super.transform(value, metadata);
  }
}
