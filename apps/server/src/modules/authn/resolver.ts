import { Arg, ID, Mutation, Resolver } from 'type-graphql';

import * as errors from '#lib/errors/graphql';
import { AuthToken } from '#lib/models/AuthToken/gql';
import { SideEffect } from '#lib/models/SideEffect/gql';
import { UserService } from '#server/modules/user/service';

import { AuthnService } from './service';

@Resolver(of => AuthToken)
export class AuthnResolver {
  constructor(
    private authnService: AuthnService,
    private userService: UserService,
  ) {}

  @Mutation(returns => AuthToken, {
    description: 'Get a token for an existing user',
    nullable: true,
  })
  async login(@Arg('email') email: string, @Arg('password') password: string) {
    const result = await this.authnService.getUserToken(email, password);

    if (result.ok === false) {
      const { field, message } = result.errors[0];

      if (field === 'credentials') {
        if (message === 'EXPIRED') {
          throw new errors.Expired('email');
        } else if (message === 'FAILED') {
          throw new errors.DoesNotMatch('email', 'password');
        }
      } else if (field === 'account') {
        throw new errors.Unauthorized();
      }

      throw new errors.SomethingElse();
    }

    const { authId, ...token } = result.value;
    return token;
  }

  @Mutation(returns => SideEffect, {
    description: 'Destroys the user session',
  })
  async logout(@Arg('refresh', type => ID) refresh: string) {
    const result = await this.authnService.destroyUserSession(refresh);

    if (result.ok === false) {
      throw new errors.SomethingElse();
    }

    return { ok: true };
  }

  @Mutation(returns => AuthToken, {
    description: 'Generates a new token from an existing refresh token',
  })
  async refreshSession(@Arg('refresh', type => ID) refresh: string) {
    const result = await this.authnService.refreshUserToken(refresh);

    if (result.ok === false) {
      throw new errors.SomethingElse();
    }

    const { session } = result.value;
    return { refresh, session };
  }

  @Mutation(returns => AuthToken, { description: 'Get a token for a new user' })
  async signup(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Arg('password2') password2: string,
  ) {
    if (password !== password2) {
      throw new errors.DoesNotMatch('password', 'password2');
    }

    const result = await this.authnService.createUserToken(email, password);

    if (result.ok === false) {
      const { field, message } = result.errors[0];

      if (field === 'username') {
        if (message === 'MISSING') {
          throw new errors.Required('email');
        } else if (message === 'FORMAT_INVALID') {
          throw new errors.InvalidFormat('email', email);
        } else if (message === 'TAKEN') {
          throw new errors.AlreadyTaken('email', email);
        }
      } else if (field === 'password') {
        if (message === 'MISSING') {
          throw new errors.Required('password');
        } else if (message === 'INSECURE') {
          throw new errors.Insecure('password', password);
        }
      }

      throw new errors.SomethingElse();
    }

    const { authId, ...token } = result.value;

    if (!authId) {
      throw new errors.Required('authId');
    }

    await this.userService.create({ authId, email });

    return token;
  }
}
