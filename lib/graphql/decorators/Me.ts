import { createParamDecorator } from 'type-graphql';

import { GraphQLContext } from '#lib/graphql/context';

export function Me() {
  return createParamDecorator<GraphQLContext>(({ context }) => context.me);
}
