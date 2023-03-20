import { Injectable } from '@nestjs/common';
import { Connection, EntityManager } from 'typeorm';

@Injectable()
export class UnitOfWork {
  private transactionManager: EntityManager | null;

  constructor(private connection: Connection) {}

  getTransactionManager(): EntityManager | null {
    return this.transactionManager;
  }

  getConnection(): Connection {
    return this.connection;
  }

  async callStoredProcedure(sp: string, params: Record<string, unknown>) {
    const paramsStr = Object.keys(params)
      .map((key, index) => `@${key}=@${index}`)
      .join(', ');
    const queryStr = `EXEC ${sp} ${paramsStr}`;
    return this.connection.query(queryStr, Object.values(params));
  }

  async withTransaction<T>(work: (manager: EntityManager) => T): Promise<T> {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    this.transactionManager = queryRunner.manager;
    try {
      const result = await work(this.transactionManager);
      await queryRunner.commitTransaction();
      return result;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
      this.transactionManager = null;
    }
  }
}
