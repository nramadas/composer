import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { ulid } from 'ulid';

import { Data } from '#lib/models/User';

@Entity()
@Unique(['authId', 'email'])
export class User {
  @PrimaryColumn('varchar')
  id!: string;

  @BeforeInsert()
  setId() {
    this.id = ulid();
  }

  @Column()
  authId!: string;

  @Column({ type: 'jsonb' })
  data!: Partial<Data>;

  @Column()
  email!: string;

  // metadata
  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deleted!: Date;
}
