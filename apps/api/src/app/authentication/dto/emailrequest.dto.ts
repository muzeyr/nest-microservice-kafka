import { Transform } from 'class-transformer';
import { isDefined, IsNotEmpty, IsString, ValidateIf } from 'class-validator';
import {IsEmailDomainValid, IsPhoneNumberDataValid} from "@nest-microservice-kafka/shared/validators";

export class EmailRequest {
  @IsNotEmpty()
  @IsEmailDomainValid()
  email: string;
}

export class EmailChangeRequest {
  @IsNotEmpty()
  @IsString()
  token: string;
}

export class PhoneNumberChangeRequest {
  @IsNotEmpty()
  @IsString()
  token: string;
}

export class PasswordChangeRequest {
  @ValidateIf((o) => isDefined(o.email))
  @IsString()
  email?: string;
  @IsNotEmpty()
  @IsString()
  token: string;
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class EmailPhoneChangeRequest {
  @ValidateIf((o) => o.email !== undefined)
  @IsEmailDomainValid()
  email?: string;

  @ValidateIf((o) => o.phoneNumber !== undefined)
  @IsPhoneNumberDataValid()
  phoneNumber?: string;
}
