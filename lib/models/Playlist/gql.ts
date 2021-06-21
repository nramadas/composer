import { Field, ObjectType, ID } from 'type-graphql';

import { Channel } from '#lib/models/Channel/gql';

import { Playlist as PlaylistModel } from './index';

@ObjectType({ description: 'A playlist' })
export class Playlist implements PlaylistModel {
  @Field(type => ID, { description: 'ID of the channel the playlist is in' })
  channelId!: Channel['id'];

  @Field({ description: 'When this persona was established' })
  created!: Date;

  @Field({ description: 'Is this playlist the default playlist?' })
  isDefault!: boolean;

  @Field(type => ID, { description: 'Playlist ID' })
  id!: PlaylistModel['id'];

  @Field({ description: "The playlist's name" })
  name!: string;
}
