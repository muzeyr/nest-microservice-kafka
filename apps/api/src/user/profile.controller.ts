import {Body, Controller, Get, Logger, Param, Patch, Post, ValidationPipe} from '@nestjs/common';
import {
  CreateUserDto,
  LoginRequest, ProfileResponse,
  UpdatePasswordRequest
} from '@nest-microservice-kafka/shared/dto';
import { UserService } from './user.service';
import {CurrentUser} from '@nest-microservice-kafka/shared/common';
import {UseDefaultSecurity} from "../app/entities/default.response.entity";
import {User} from "@nest-microservice-kafka/shared/entity";
import {ApiTags} from "@nestjs/swagger";

@UseDefaultSecurity()
@ApiTags('Profile Services')
@Controller('profile')
export class ProfileController {
  private readonly logger: Logger = new Logger(this.constructor.name);
  constructor(private readonly userService: UserService) {}

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
      login: LoginRequest
  ) {
    return this.userService.login(login);
  }

  @Get('/userById/:userId')
  async getUserById(
    @Param('userId') userId: string,
  ) {
    return this.userService.getUserById(userId);
  }


  @Get('/me')
  async getCurrentUserProfile(
    @CurrentUser() user: User,
  ): Promise<ProfileResponse> {
    return this.userService.getUserById(user.id);
  }
}
