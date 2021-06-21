import { Field, ObjectType, ID } from 'type-graphql';

import { User } from '#lib/models/User/gql';

import { PersonaContributor as PersonaContributorModel } from './index';

@ObjectType({ description: 'A contributor persona' })
export class PersonaContributor implements PersonaContributorModel {
  @Field(type => ID, { description: 'ID of the user this persona belongs to' })
  belongsToId!: User['id'];

  @Field({ description: 'When this persona was established' })
  created!: Date;

  @Field(type => ID, { description: 'PersonaContributor ID' })
  id!: PersonaContributorModel['id'];
}
