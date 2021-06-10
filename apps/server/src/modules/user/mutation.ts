import { Resolver } from 'type-graphql';

import { User } from '#lib/models/User/gql';

import { UserService } from './service';

@Resolver(of => User)
export class UserMutationResolver {
  constructor(private userService: UserService) {}
}
