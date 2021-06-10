import { Resolver } from 'type-graphql';

import { User } from '#lib/models/User/gql';

import { UserService } from './service';

@Resolver(of => User)
export class UserResolver {
  constructor(private userService: UserService) {}
}
