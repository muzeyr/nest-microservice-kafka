import {
  isDefined,
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  ValidateIf,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {IsEmailDomainValid, IsPhoneNumberDataValid} from "@nest-microservice-kafka/shared/validators";
import {User} from "@nest-microservice-kafka/shared/entity";

export abstract class BaseLoginRequest {
  @ValidateIf((o) => isDefined(o.strategy))
  @IsNotEmpty()
  @ApiProperty()
  readonly strategy: string;
}

export class PhoneNumberRequest {
  @IsNotEmpty()
  @IsPhoneNumberDataValid()
  phoneNumber: string;
}

export class PhoneNumberVerificationRequest {
  @IsNotEmpty()
  @IsPhoneNumberDataValid()
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  token: string;
}

export class UserUpdateRequest {
  @ValidateIf((o) => o.email !== undefined)
  @IsNotEmpty()
  @IsEmail()
  @IsEmailDomainValid()
  email?: string;

  @ValidateIf((o) => o.phoneNumber !== undefined)
  @IsNotEmpty()
  @IsPhoneNumberDataValid()
  phoneNumber?: string;

  @ValidateIf((o) => o.userName !== undefined)
  @IsNotEmpty()
  @IsString()
  userName?: string;
}

export class LocalLoginRequest extends BaseLoginRequest {
  @IsNotEmpty()
  @IsEmail()
  @IsEmailDomainValid()
  @ApiProperty()
  email: string;
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}

export class AccessTokenRequest extends BaseLoginRequest {
  @IsNotEmpty()
  @ApiProperty()
  readonly access_token: string;
}

export class AppleLoginRequest extends AccessTokenRequest {
  @IsNotEmpty()
  @ApiProperty()
  readonly firstName: string;
  @IsNotEmpty()
  @ApiProperty()
  readonly lastName: string;
}

export class FacebookLoginRequest extends AccessTokenRequest {}

export class SnapchatLoginRequest extends AccessTokenRequest {}

export class CreateUserRequest extends LocalLoginRequest {
  @IsNotEmpty()
  @MaxLength(60)
  @Matches(/^[^\s]*$/)
  @ApiProperty()
  username: string;
  @IsNotEmpty()
  @ApiProperty()
  firstName: string;
  @IsNotEmpty()
  @ApiProperty()
  lastName: string;
}

export class LoginResponse {
  @ApiProperty()
  user!: User;
  @ApiProperty()
  accessToken!: string;
  @ApiProperty()
  isVerified!: boolean;
}

export class SocialLoginResponse extends LoginResponse {
  @ApiProperty()
  newUser!: boolean;
}
