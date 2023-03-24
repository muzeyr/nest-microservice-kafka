import {Body, Controller, Get, Logger, ParseIntPipe, Patch, Post, ValidationPipe} from '@nestjs/common';

import { AppService } from './app.service';
import {Ctx, EventPattern, KafkaContext, MessagePattern, Payload} from '@nestjs/microservices';
import {CreateUserDto, LoginRequest, UpdatePasswordRequest} from '@nest-microservice-kafka/shared/dto';
import { UserEvent } from '@nest-microservice-kafka/shared/enum';

@Controller()
export class AppController {
  private readonly logger: Logger = new Logger(this.constructor.name);

  constructor(private readonly appService: AppService) {}

  @Post()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern(UserEvent.USER_CREATE)
  async handleUserCreate(@Payload(ValidationPipe) data: CreateUserDto,   @Ctx() context: KafkaContext) {
    const result = await this.appService.createUser(data);
    delete result.password;
    const originalMessage = context.getMessage();
    return {
      result,
      offset: originalMessage.offset,
      timestamp: originalMessage.timestamp,
    };
  }

  @MessagePattern(UserEvent.USER_BY_ID)
  async handleGetUser(@Payload('userId') userId,
                      @Ctx() context: KafkaContext) {
    const result = await this.appService.getUser(userId);
    const originalMessage = context.getMessage();
    return {
      result,
      offset: originalMessage.offset,
      timestamp: originalMessage.timestamp,
    };
  }

  @EventPattern(UserEvent.USER_UPDATE_PASSWORD)
  async changePassword(@Payload(ValidationPipe) data: UpdatePasswordRequest) {
    return this.appService.changeUserPassword(data);
  }

  @MessagePattern(UserEvent.USER_LOGIN)
  async login(@Payload() data: LoginRequest, @Ctx() context: KafkaContext) {
    const result = await this.appService.login(data);
    const originalMessage = context.getMessage();
    return {
      result,
      offset: originalMessage.offset,
      timestamp: originalMessage.timestamp,
    };


  }

}
