import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    description: 'The name of the user',
    example: 'Uzeyr OZCAN',
  })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'muzeyr@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
