import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { UserModule } from '../user/user.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ServiceName } from '@nest-microservice-kafka/shared/enum';

@Module({
  imports: [
    ClientsModule.register([
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
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService, UserModule],
})
export class ProductModule {}
