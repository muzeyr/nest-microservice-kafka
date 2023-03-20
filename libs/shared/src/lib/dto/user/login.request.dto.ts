import {IsEmail, IsNotEmpty} from "class-validator";
import {IsEmailDomainValid} from "../../common/validators/email.domain.validator";
import {ApiProperty} from "@nestjs/swagger";

export class LocalLoginRequest  {
  @IsNotEmpty()
  @IsEmail()
  @IsEmailDomainValid()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
