import { Controller, Get, ValidationPipe } from '@nestjs/common';

import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ProductEvent } from '@nest-microservice-kafka/shared/enum';
import { CreateProductDto } from '@nest-microservice-kafka/shared/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern(ProductEvent.PRODUCT_CREATE)
  create(@Payload(ValidationPipe) data: CreateProductDto) {
    this.appService.create(data);
  }

  @Get()
  getData() {
    return this.appService.getData();
  }
}
