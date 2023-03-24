import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import {AppConfigService, AppConfigServiceInterface} from "./configuration.service";
import configuration from "./configuration";

/**
 * Import and provide app configuration related classes.
 *
 * @module
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRES: Joi.string().required(),
        MYSQL_ROOT_PASSWORD: Joi.string().required(),
        MYSQL_USER: Joi.string().required(),
        MYSQL_PASSWORD: Joi.string().required(),
        MYSQL_DATABASE: Joi.string().required(),
        MYSQL_HOST: Joi.string().required()
      }),
    }),
  ],
  providers: [
    ConfigService,
    {
      provide: AppConfigServiceInterface,
      useClass: AppConfigService,
    },
    AppConfigService,
  ],
  exports: [ConfigService, AppConfigServiceInterface, AppConfigService],
})
export class AppConfigModule {}
