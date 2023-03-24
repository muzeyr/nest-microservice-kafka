import { FindsBaseException } from './findsBaseException';
import { HttpStatus } from '@nestjs/common';

export class DiscountCodeNotFoundOrExpired extends FindsBaseException {
  constructor(
    objectOrError?: any,
    description = 'Discount Code Not Found Or Expired',
  ) {
    super(description, HttpStatus.NOT_FOUND);
    this.errorCode = 1923;
  }
}
