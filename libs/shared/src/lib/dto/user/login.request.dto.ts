import {IsEmail, IsNotEmpty} from "class-validator";
import {IsEmailDomainValid} from "../../common/validators/email.domain.validator";
import {ApiProperty} from "@nestjs/swagger";

export class LoginRequest  {
  @IsNotEmpty()
  @IsEmail()
  @IsEmailDomainValid()
  @ApiProperty({
    example: 'muzeyr@example.com',
  })
  email: string;

  @IsNotEmpty()
  @ApiProperty({
    example: 'P@ssword123456',
  })
  password: string;
}
