import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ServiceName } from '@nest-microservice-kafka/shared/enum';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {PassportModule} from "@nestjs/passport";
import {ProfileController} from "./profile.controller";

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
    ]),
    PassportModule
  ],
  controllers: [UserController,ProfileController],
  providers: [UserService,],
  exports: [UserService],
})
export class UserModule {}
