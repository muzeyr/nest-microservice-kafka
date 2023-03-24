import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import {UserModule} from "../../user/user.module";
import {AppConfigModule, AppConfigService} from "@nest-microservice-kafka/shared/config";
import {JwtNoDbLookupStrategy} from "./strategy/jwt.nodblookup.strategy";


@Module({
  imports: [
    UserModule,
    PassportModule,
    AppConfigModule,
    JwtModule.registerAsync({
      imports: [AppConfigModule],
      inject: [AppConfigService],
      useFactory: async (configService: AppConfigService) => ({
        secret: configService.jwtSecret,
        signOptions: {
          expiresIn: configService.jwtExpires,
          audience: 'bursaBT',
          issuer: 'bursaBT',
          algorithm: 'HS256',
        },
      }),
    }),
  ],
  providers: [
    LocalStrategy,
    JwtStrategy,
    JwtNoDbLookupStrategy,
  ],
  controllers: [],
  exports: [],
})
export default class AuthenticationModule {}
