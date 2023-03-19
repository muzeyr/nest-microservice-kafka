import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ServiceName } from '@nest-microservice-kafka/shared/enum';
import { UsersRepository } from './users.repository';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {InjectDataSource, TypeOrmModule} from "@nestjs/typeorm";
import {User} from "@nest-microservice-kafka/shared/entity";
import {typeOrmAsyncConfig} from "../config/typeorm.config";

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
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    TypeOrmModule.forFeature([User])

  ],
  controllers: [AppController],
  providers: [AppService, UsersRepository],
})
export class AppModule {

}
