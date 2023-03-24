import { HttpStatus } from '@nestjs/common';
import { FindsBaseException } from './findsBaseException';

export class UserNotFoundException extends FindsBaseException {
  constructor(objectOrError?: any, description = 'User not found') {
    super(description, HttpStatus.NOT_FOUND);
    super.errorCode = 404;
  }
}

export class UsernameNotAllowedException extends FindsBaseException {
  constructor(username: string) {
    super(`Username(${username}) in use`, HttpStatus.CONFLICT);
  }
}

export class EmailNotAllowedException extends FindsBaseException {
  constructor(email: string) {
    super(`Email(${email}) in use`, HttpStatus.CONFLICT);
  }
}

export class PhoneNumberNotAllowedException extends FindsBaseException {
  constructor(phoneNumber: string) {
    super(`PhoneNumber(${phoneNumber}) in use`, HttpStatus.CONFLICT);
  }
}

export class UserDataNotAllowedException extends FindsBaseException {
  constructor(email: string, username: string) {
    super(
      `Email(${email}) or username(${username}) in use`,
      HttpStatus.CONFLICT,
    );
  }
}
