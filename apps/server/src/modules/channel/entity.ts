import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';
import { ulid } from 'ulid';

import { Channel as ChannelModel, Data } from '#lib/models/Channel';
import { PersonaContributor } from '#server/modules/personaContributor/entity';
import { Playlist } from '#server/modules/playlist/entity';
import { Track } from '#server/modules/track/entity';

@Entity()
@Unique(['isDefaultOfId'])
export class Channel {
  @PrimaryColumn('varchar')
  id!: ChannelModel['id'];

  @BeforeInsert()
  setId() {
    this.id = ulid();
  }

  @Column()
  createdById!: PersonaContributor['id'];

  @Column({ type: 'jsonb' })
  data!: Partial<Data>;

  @Column({ nullable: true })
  isDefaultOfId?: PersonaContributor['id'];

  // relations
  @ManyToMany('PersonaContributor', 'contributesTo')
  @JoinTable()
  additionalContributors!: PersonaContributor[];

  @ManyToOne('PersonaContributor', 'createdChannels')
  createdBy!: PersonaContributor;

  @OneToOne('Playlist', 'isDefaultIn', { nullable: true })
  defaultPlaylist?: Playlist;

  @OneToOne('PersonaContributor', 'defaultChannel')
  @JoinColumn()
  isDefaultOf?: PersonaContributor;

  @OneToMany('Playlist', 'channel')
  playlists!: Playlist[];

  @OneToMany('Track', 'channel')
  tracks!: Track[];

  // metadata
  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deleted!: Date;
}
