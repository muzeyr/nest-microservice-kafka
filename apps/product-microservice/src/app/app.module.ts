import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ServiceName } from '@nest-microservice-kafka/shared/enum';
import { ProductRepository } from './product.repository';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ServiceName.USER_MICROSERVICE,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: ServiceName.USER,
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: ServiceName.USER_CONSUMER,
          },
        },
      },
      {
        name: ServiceName.PRODUCT_MICROSERVICE,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: ServiceName.PRODUCT,
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: ServiceName.PRODUCT_CONSUMER,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, ProductRepository],
})
export class AppModule {}
