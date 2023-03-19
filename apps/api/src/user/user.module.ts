import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ServiceName } from '@nest-microservice-kafka/shared/enum';
import { ClientsModule, Transport } from '@nestjs/microservices';

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
          producerOnlyMode: true,
          consumer: {
            groupId: ServiceName.USER_CONSUMER,
          },
        },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
