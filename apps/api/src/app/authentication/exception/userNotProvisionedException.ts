import { FindsBaseException } from './findsBaseException';
import { HttpStatus } from '@nestjs/common';

export class UserNotProvisionedException extends FindsBaseException {
  constructor(
    objectOrError?: any,
    description = 'Please finalize the stripe onboarding to sell products',
  ) {
    super(description, HttpStatus.NOT_FOUND);
    this.errorCode = -1;
  }
}
