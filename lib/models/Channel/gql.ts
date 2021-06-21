import { Field, ObjectType, ID } from 'type-graphql';

import { PersonaContributor } from '#lib/models/PersonaContributor/gql';

import { Channel as ChannelModel } from './index';

@ObjectType({ description: 'A media channel' })
export class Channel implements ChannelModel {
  @Field(type => ID, {
    description: 'ID of the persona that created this channel',
  })
  createdById!: PersonaContributor['id'];

  @Field({ description: 'When this channel was created' })
  created!: Date;

  @Field(type => ID, { description: 'Channel ID' })
  id!: ChannelModel['id'];
}
