import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ServiceName } from '@nest-microservice-kafka/shared/enum';
import { UsersRepository } from './users.repository';
import {ConfigModule} from "@nestjs/config";
import { TypeOrmModule} from "@nestjs/typeorm";
import {User} from "@nest-microservice-kafka/shared/entity";
import {typeOrmAsyncConfig} from "../config/typeorm.config";
import {JwtModule} from "@nestjs/jwt";
import AppConfigModule from "./config/app/configuration.module";
import AppConfigService from "./config/app/configuration.service";
import AuthenticationModule from "../../../api/src/app/authentication/authentication.module";

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
    JwtModule.registerAsync({
      imports: [AppConfigModule],
      inject: [AppConfigService],
      useFactory: async (configService: AppConfigService) => ({
        secret: configService.jwtSecret,
        signOptions: {
          expiresIn: configService.jwtExpires,
        },
      }),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    TypeOrmModule.forFeature([User]),
    AuthenticationModule,
  ],
  controllers: [AppController],
  providers: [AppService, UsersRepository],
})
export class AppModule {

}
