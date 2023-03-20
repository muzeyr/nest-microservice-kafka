import { Module, Global } from '@nestjs/common';
import { UnitOfWork } from './unitofwork.provider';
import { TransactionalRepository } from './transactional.repository';

@Global()
@Module({
  providers: [UnitOfWork, TransactionalRepository],
  exports: [UnitOfWork, TransactionalRepository],
})
export class UnitOfWorkModule {}
