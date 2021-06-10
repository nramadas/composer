import { Arg, ID, Query, Resolver } from 'type-graphql';

import { Me } from '#lib/graphql/decorators';
import { User } from '#lib/models/User/gql';

import { UserService } from './service';

@Resolver(of => User)
export class UserQueryResolver {
  constructor(private userService: UserService) {}

  @Query(returns => User, {
    description: 'Get the requesting user',
    nullable: true,
  })
  async me(@Me() me: User | null) {
    return me;
  }

  @Query(returns => User, {
    description: 'Get a user by ID',
    nullable: true,
  })
  async userById(@Arg('id', type => ID) id: string) {
    return this.userService.findById(id);
  }
}
