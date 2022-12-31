import { BaseEntity } from './base.entity';
import { User } from './user.entity';

export class ProductEntity extends BaseEntity {
  name: string;

  price: number;

  user: User;
}
