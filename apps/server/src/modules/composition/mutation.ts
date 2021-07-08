import { Arg, Resolver, Mutation } from 'type-graphql';

import * as errors from '#lib/errors/graphql';
import { Me } from '#lib/graphql/decorators/Me';
import { Composition } from '#lib/models/Composition/gql';
import { CompositionInput } from '#lib/models/Composition/gql.input';
import { User } from '#lib/models/User/gql';

import { CompositionService } from './service';

@Resolver(of => Composition)
export class CompositionMutationResolver {
  constructor(private readonly compositionService: CompositionService) {}

  @Mutation(returns => Composition, { description: 'Saves a composition' })
  async saveComposition(
    @Me() me: User | null,
    @Arg('composition') composition: CompositionInput,
  ) {
    if (!me || !me.activated) {
      throw new errors.Unauthorized();
    }

    const savedComposition = await this.compositionService.put(
      me.id,
      composition,
    );

    return savedComposition;
  }
}
