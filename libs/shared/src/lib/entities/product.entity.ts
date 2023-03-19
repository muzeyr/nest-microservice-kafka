import { BaseEntity } from './base.entity';
import {Column, Entity} from "typeorm";

@Entity()
export class ProductEntity extends BaseEntity {

  @Column()
  name: string;

  @Column()
  price: number;

}
