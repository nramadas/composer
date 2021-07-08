import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ulid } from 'ulid';

import { Composition as CompositionModel } from '#lib/models/Composition';
import { User } from '#server/modules/user/entity';

@Entity()
export class Composition {
  @PrimaryColumn('varchar')
  id!: string;

  @BeforeInsert()
  setId() {
    this.id = ulid();
  }

  @Column({ type: 'jsonb' })
  data!: CompositionModel;

  @Column()
  belongsToId!: User['id'];

  @Column()
  key!: string;

  // relations
  @ManyToOne('User', 'compositions')
  belongsTo!: User;

  // metadata
  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deleted!: Date;
}
