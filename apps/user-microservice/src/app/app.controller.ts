import { Controller, Get, ParseIntPipe, ValidationPipe } from '@nestjs/common';

import { AppService } from './app.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from '@nest-microservice-kafka/shared/dto';
import { UserEvent } from '@nest-microservice-kafka/shared/enum';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
  @EventPattern(UserEvent.USER_CREATE)
  handleUserCreate(@Payload(ValidationPipe) data: CreateUserDto) {
    this.appService.createUser(data);
  }

  @MessagePattern('get_user')
  handleGetUser(@Payload('userId', ParseIntPipe) userId: number) {
    return this.appService.getUser(userId);
  }
}
