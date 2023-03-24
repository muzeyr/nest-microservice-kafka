import {Body, Controller, Get, Logger, Param, Patch, Post, ValidationPipe} from '@nestjs/common';
import {
  CreateUserDto,
  LoginRequest, ProfileResponse,
  UpdatePasswordRequest
} from '@nest-microservice-kafka/shared/dto';
import { UserService } from './user.service';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('User Services')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('sign-up')
  createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('/login')
  async loginRoot(
    @Body()
      login: LoginRequest
  ) {
    return this.userService.login(login);
  }
}
