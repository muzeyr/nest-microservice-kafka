import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export abstract class AppConfigServiceInterface {
  readonly jwtSecret: string;
  readonly jwtExpires: string;
  readonly mysqlRootPassword: string;
  readonly mysqlUser: string;
  readonly mysqlPassword: string;
  readonly mysqlDatabase: string;
  readonly mysqlHost: string;

}

@Injectable()
export default class AppConfigService implements AppConfigServiceInterface {
  constructor(private configService: ConfigService) {}

  get jwtSecret(): string {
    return this.configService.get<string>('app.jwtSecret');
  }

  get jwtExpires(): string {
    return this.configService.get<string>('app.jwtExpires');
  }
  get mysqlRootPassword(): string {
    return this.configService.get<string>('app.mysqlRootPassword');
  }
  get mysqlUser(): string {
    return this.configService.get<string>('app.mysqlUser');
  }
  get mysqlPassword(): string {
    return this.configService.get<string>('app.mysqlPassword');
  }
  get mysqlDatabase(): string {
    return this.configService.get<string>('app.mysqlDatabase');
  }
  get mysqlHost(): string {
    return this.configService.get<string>('app.mysqlHost');
  }

}
