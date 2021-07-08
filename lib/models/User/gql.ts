import { Field, ObjectType, ID } from 'type-graphql';

import { Language } from '#lib/models/Language/gql';

import { User as UserModel } from './index';

@ObjectType({ description: 'A user' })
export class User implements UserModel {
  @Field({ description: 'Whether or not the user is a paying customer' })
  activated!: boolean;

  @Field({ description: 'When the user created the account' })
  created!: Date;

  @Field({ description: "User's email" })
  email!: string;

  @Field(type => ID, { description: 'User ID' })
  id!: UserModel['id'];

  @Field(type => Language, {
    description: 'What language the user prefers to interact in',
    nullable: true,
  })
  preferredLanguage!: Language;
}
