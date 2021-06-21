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
} from 'typeorm';
import { ulid } from 'ulid';

import { Channel as ChannelModel, Data } from '#lib/models/Channel';
import { PersonaContributor } from '#server/modules/personaContributor/entity';
import { Playlist } from '#server/modules/playlist/entity';
import { Track } from '#server/modules/track/entity';

@Entity()
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

  @Column()
  defaultPlaylistId!: Playlist['id'];

  // relations
  @ManyToMany('PersonaContributor', 'contributesTo')
  @JoinTable()
  additionalContributors!: PersonaContributor[];

  @ManyToOne('PersonaContributor', 'createdChannels')
  createdBy!: PersonaContributor;

  @OneToOne('Playlist', 'isDefaultIn')
  @JoinColumn()
  defaultPlaylist!: Playlist;

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
