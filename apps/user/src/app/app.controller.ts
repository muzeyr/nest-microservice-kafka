import {Controller, Get, ParseIntPipe, Post, ValidationPipe} from '@nestjs/common';

import { AppService } from './app.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from '@nest-microservice-kafka/shared/dto';
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

  @MessagePattern('get_user')
  handleGetUser(@Payload('userId') userId: string) {
    return this.appService.getUser(userId);
  }
}
