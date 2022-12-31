import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from '@nest-microservice-kafka/shared/dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('sign-up')
  createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
