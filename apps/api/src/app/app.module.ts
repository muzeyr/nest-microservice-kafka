import {forwardRef, Module} from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { ProductModule } from '../product/product.module';
import {PassportModule} from "@nestjs/passport";
import AuthenticationModule from "./authentication/authentication.module";

@Module({
  imports: [
    PassportModule,
    UserModule,
    ProductModule,
    forwardRef(() => AuthenticationModule),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
