import {BaseEntity} from "./base.entity";
import {Column, Entity} from "typeorm";

@Entity()
export class User extends BaseEntity {

  @Column()
  fullName: string;

  @Column()
  email: string;

}
