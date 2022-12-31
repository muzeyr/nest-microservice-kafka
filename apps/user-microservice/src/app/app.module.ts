import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ServiceName } from '@nest-microservice-kafka/shared/enum';
import { UsersRepository } from './users.repository';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ServiceName.USER_MICROSERVICE,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'user',
            brokers: ['localhost:9092'],
          },
          producerOnlyMode: true,
          consumer: {
            groupId: 'user-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, UsersRepository],
})
export class AppModule {}
