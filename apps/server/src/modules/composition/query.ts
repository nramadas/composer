import { Arg, ID, Query, Resolver } from 'type-graphql';

import * as errors from '#lib/errors/graphql';
import { Me } from '#lib/graphql/decorators';
import { Composition } from '#lib/models/Composition/gql';
import { User } from '#lib/models/User/gql';

import { CompositionService } from './service';

@Resolver(of => Composition)
export class CompositionQueryResolver {
  constructor(private readonly compositionService: CompositionService) {}

  @Query(returns => [Composition], {
    description: 'Return all my compositions',
  })
  async myCompositions(@Me() me: User | null) {
    if (!me || !me.activated) {
      throw new errors.Unauthorized();
    }

    return await this.compositionService.getAll(me.id);
  }

  @Query(returns => Composition, {
    description: 'Returns a single composition',
    nullable: true,
  })
  async getComposition(
    @Arg('compositionId', type => ID) compositionId: string,
  ) {
    return await this.compositionService.get(compositionId);
  }
}
