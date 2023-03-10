/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { ServiceName } from '@nest-microservice-kafka/shared/enum';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,

      options: {
        client: {
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: ServiceName.PRODUCT_CONSUMER,
        },
      },
    }
  );
  await app.listen();
}

bootstrap();
