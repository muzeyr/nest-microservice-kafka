import {Body, Controller, Get, Param, Patch, Post, ValidationPipe} from '@nestjs/common';
import {CreateUserDto, LocalLoginRequest, UpdatePasswordRequest} from '@nest-microservice-kafka/shared/dto';
import { UserService } from './user.service';
import {CurrentUser} from '@nest-microservice-kafka/shared/common';
import {User} from "@nest-microservice-kafka/shared/entity";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('sign-up')
  createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch('/password')
  async changePassword(
    @CurrentUser() user: User,
    @Body() updatePasswordRequest: UpdatePasswordRequest,
  ) {
    return this.userService.changePassword(user, updatePasswordRequest);
  }

  @Post('/login')
  async loginRoot(
    @Body()
      login: LocalLoginRequest
  ) {
    return this.userService.login(login);
  }

  @Get('/byId/:userId')
  async userById(
    @Param('userId') userId: string,
  ) {
    return this.userService.getUserById(userId);
  }
}
