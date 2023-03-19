import {BeforeInsert, Column, CreateDateColumn, DeepPartial, DeleteDateColumn, Index, UpdateDateColumn} from "typeorm";
import {Exclude, Expose} from "class-transformer";
import {ApiHideProperty} from "@nestjs/swagger";
import { ObjectId } from 'bson';

export abstract class BaseEntity {

  constructor(input?: DeepPartial<any>) {
    if (input) {
      for (const [key, value] of Object.entries(input)) {
        (this as any)[key] = value;
      }
    }
  }

  @Column({
    primary: true,
    type: 'varchar',
    length: 36,
  })
  id!: string;

  @Expose()
  @CreateDateColumn()
  createdAt!: Date;

  @Expose()
  @UpdateDateColumn()
  updatedAt!: Date;

  @ApiHideProperty()
  @Exclude()
  @DeleteDateColumn({ nullable: true })
  @Index({ unique: false })
  deletedAt?: Date;

  @BeforeInsert()
  async populateSortableId() {
    const generatedId = new ObjectId(ObjectId.generate()).toHexString();
    console.log('generatedId',generatedId)
    this.id = generatedId;
  }

}
