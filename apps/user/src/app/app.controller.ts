import {Body, Controller, Get, ParseIntPipe, Patch, Post, ValidationPipe} from '@nestjs/common';

import { AppService } from './app.service';
import {Ctx, EventPattern, KafkaContext, MessagePattern, Payload} from '@nestjs/microservices';
import {CreateUserDto, LocalLoginRequest, UpdatePasswordRequest} from '@nest-microservice-kafka/shared/dto';
import { UserEvent } from '@nest-microservice-kafka/shared/enum';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getData() {
    return this.appService.getData();
  }

  @EventPattern(UserEvent.USER_CREATE)
  async handleUserCreate(@Payload(ValidationPipe) data: CreateUserDto) {
    return await this.appService.createUser(data);
  }

  @MessagePattern(UserEvent.USER_BYID)
  handleGetUser(@Payload('userId') userId: string, @Ctx() context: KafkaContext) {
    return this.appService.getUser(userId);
  }

  @EventPattern(UserEvent.USER_UPDATE_PASSWORD)
  async changePassword(@Payload(ValidationPipe) data: UpdatePasswordRequest) {
    return this.appService.changeUserPassword(data);
  }

  @MessagePattern(UserEvent.USER_LOGIN)
  login(@Payload() data: LocalLoginRequest, @Ctx() context: KafkaContext) {
    return this.appService.login(data);
  }

}
