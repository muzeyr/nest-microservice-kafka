import {BaseEntity} from "./base.entity";
import {BeforeUpdate, Column, Entity} from "typeorm";
import {ApiHideProperty} from "@nestjs/swagger";
import {Exclude} from "class-transformer";
import { getRounds, hash } from 'bcrypt';
@Entity()
export class User extends BaseEntity {

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  @ApiHideProperty()
  @Exclude()
  password?: string;

  @Column({ nullable: true })
  birthDate?: Date;

  @BeforeUpdate()
  async hashPasswordField() {
    try {
      if (this.password && getRounds(this.password) != 10) {
        this.password = await hash(this.password, 10);
      }
    } catch {
      this.password = await hash(this.password, 10);
    }
  }



}
