import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
  ProductEvent,
  ServiceName,
} from '@nest-microservice-kafka/shared/enum';
import { ClientKafka } from '@nestjs/microservices';
import { CreateProductDto } from '@nest-microservice-kafka/shared/dto';
import { ProductRepository } from './product.repository';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    @Inject(ServiceName.PRODUCT_MICROSERVICE)
    private readonly authClient: ClientKafka,
    private readonly productRepository: ProductRepository
  ) {}
  getData(): { message: string } {
    return { message: 'Welcome to product!' };
  }

  create(data: CreateProductDto) {
    this.productRepository.save(data);
  }

  onModuleInit(): any {
    this.authClient.subscribeToResponseOf(ProductEvent.PRODUCT_DETAIL);
  }
}
