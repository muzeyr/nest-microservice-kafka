import { HttpStatus } from '@nestjs/common';
import { FindsBaseException } from './findsBaseException';

export class FileNotFoundException extends FindsBaseException {
  constructor(objectOrError?: any, description = 'File not found') {
    super(description, HttpStatus.NOT_FOUND);
    super.errorCode = 404;
  }
}
