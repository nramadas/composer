import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ulid } from 'ulid';

import {
  PersonaContributor as PersonaContributorModel,
  Data,
} from '#lib/models/PersonaContributor';
import { Channel } from '#server/modules/channel/entity';
import { Track } from '#server/modules/track/entity';
import { User } from '#server/modules/user/entity';

@Entity()
export class PersonaContributor {
  @PrimaryColumn('varchar')
  id!: PersonaContributorModel['id'];

  @BeforeInsert()
  setId() {
    this.id = ulid();
  }

  @Column()
  belongsToId!: User['id'];

  @Column({ type: 'jsonb' })
  data!: Partial<Data>;

  // relations
  @OneToOne('User', 'contributorPersona')
  @JoinColumn()
  belongsTo!: User;

  @ManyToMany('Channel', 'additionalContributors')
  contributesTo!: Channel[];

  @OneToMany('Channel', 'createdBy')
  createdChannels!: Channel[];

  @OneToOne('Channel', 'isDefaultOf', { nullable: true })
  defaultChannel?: Channel;

  @OneToMany('Track', 'creator')
  tracks!: Track[];

  // metadata
  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deleted!: Date;
}
