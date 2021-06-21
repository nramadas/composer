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

import { Track as TrackModel, Data } from '#lib/models/Track';
import { Channel } from '#server/modules/channel/entity';
import { PersonaContributor } from '#server/modules/personaContributor/entity';
import { Playlist } from '#server/modules/playlist/entity';

@Entity()
export class Track {
  @PrimaryColumn('varchar')
  id!: TrackModel['id'];

  @BeforeInsert()
  setId() {
    this.id = ulid();
  }

  @Column()
  channelId!: Channel['id'];

  @Column()
  creatorId!: PersonaContributor['id'];

  @Column({ type: 'jsonb' })
  data!: Partial<Data>;

  @Column()
  playlistId!: Playlist['id'];

  // relations
  @ManyToOne('Channel', 'tracks')
  channel!: Channel;

  @ManyToOne('PersonaContributor', 'tracks')
  creator!: PersonaContributor;

  @ManyToOne('Playlist', 'tracks')
  playlist!: Playlist;

  // metadata
  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deleted!: Date;
}
