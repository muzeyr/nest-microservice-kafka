import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql';
import * as MySQLEvents from '@rodrigogs/mysql-events';
import AppConfigService from '../../config/app/configuration.service';

@Injectable()
export class MySqlPumpService {
  private mySqlEvents: MySQLEvents;

  constructor(appConfig: AppConfigService) {
    const connectionString = appConfig.mySqlConnectionString.build();
    const connection = mysql.createConnection({
      host: connectionString.host,
      user: connectionString.user,
      password: connectionString.password,
    });
    this.mySqlEvents = new MySQLEvents(connection, {
      startAtEnd: true,
      excludedSchemas: {
        mysql: true,
      },
    });
    this.mySqlEvents.start();
    this.mySqlEvents.addTrigger({
      name: '*',
      expression: '*',
      statement: MySQLEvents.STATEMENTS.ALL,
      onEvent: (event) => {
        if (event.type === 'UPDATE') {
          console.log(event.affectedRows[0].before);
          console.log(event.affectedRows[0].after);
        }
      },
    });
  }
}

export class MysqlConnectionString {
  constructor(
    private readonly host: string,
    private readonly username: string,
    private readonly password: string,
  ) {}

  build(): any {
    return {
      host: this.host,
      username: this.username,
      password: this.password,
    };
  }
}
