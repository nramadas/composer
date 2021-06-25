import { ID, Field, ObjectType } from 'type-graphql';

import { AuthToken as AuthTokenModel } from './index';

@ObjectType({ description: 'An authentication token' })
export class AuthToken implements AuthTokenModel {
  @Field(type => ID, {
    description: 'Refresh token used to generate a new session token',
  })
  refresh!: AuthTokenModel['refresh'];

  @Field(type => ID, {
    description: 'Session token used to interact with the API',
  })
  session!: AuthTokenModel['session'];
}
