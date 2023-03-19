import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ServiceName } from '@nest-microservice-kafka/shared/enum';

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
          groupId: ServiceName.USER_CONSUMER,
        },
      },
    }
  );
  await app.listen();

}

bootstrap();
