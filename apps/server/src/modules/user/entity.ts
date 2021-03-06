import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  Unique,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ulid } from 'ulid';

import { Data, User as UserModel } from '#lib/models/User';
import { Composition } from '#server/modules/composition/entity';

@Entity()
@Unique(['authId', 'email'])
export class User {
  @PrimaryColumn('varchar')
  id!: UserModel['id'];

  @BeforeInsert()
  setId() {
    this.id = ulid();
  }

  @Column()
  authId!: string;

  @Column()
  activated!: boolean;

  @Column({ type: 'jsonb' })
  data!: Partial<Data>;

  @Column()
  email!: string;

  // relations
  @OneToMany('Composition', 'belongsTo')
  compositions!: Composition[];

  // metadata
  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deleted!: Date;
}
