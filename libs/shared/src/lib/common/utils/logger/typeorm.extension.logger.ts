import { Logger, QueryRunner } from 'typeorm';

export class TypeOrmCustomLogger implements Logger {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner) {}

  logQueryError(
    error: string | Error,
    query: string,
    parameters?: any[],
    queryRunner?: QueryRunner,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logQuerySlow(
    time: number,
    query: string,
    parameters?: any[],
    queryRunner?: QueryRunner,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logSchemaBuild(message: string, queryRunner?: QueryRunner) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logMigration(message: string, queryRunner?: QueryRunner) {}

  log(
    level: 'log' | 'info' | 'warn',
    message: any,
    queryRunner?: QueryRunner,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  ) {}
}
