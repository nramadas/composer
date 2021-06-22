import { Field, ObjectType, ID } from 'type-graphql';

import { Channel } from '#lib/models/Channel/gql';
import { PersonaContributor } from '#lib/models/PersonaContributor/gql';
import { Playlist } from '#lib/models/Playlist/gql';
import { UploadedAudio } from '#lib/models/UploadedAudio/gql';
import { UploadedImage } from '#lib/models/UploadedImage/gql';

import { StagedTrack as StagedTrackModel } from './index';

@ObjectType({ description: 'A StagedTrack' })
export class StagedTrack implements StagedTrackModel {
  @Field(type => UploadedAudio, { description: 'The audio file' })
  audio!: UploadedAudio;

  @Field(type => ID, { description: 'ID of the channel the track is in' })
  channelId!: Channel['id'];

  @Field(type => UploadedImage, {
    description: 'The cover art',
    nullable: true,
  })
  coverArt?: UploadedImage;

  @Field({ description: 'When this persona was established' })
  created!: Date;

  @Field(type => ID, { description: "ID of the track's creator" })
  creatorId!: PersonaContributor['id'];

  @Field(type => ID, { description: 'Track ID' })
  id!: StagedTrackModel['id'];

  @Field(type => ID, { description: 'The ID of the playlist the track is in' })
  playlistId!: Playlist['id'];

  @Field({ description: "The track's title" })
  title!: string;
}
