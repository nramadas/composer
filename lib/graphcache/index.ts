import { gql } from '@urql/core';
import { cacheExchange } from '@urql/exchange-graphcache';

import { Composition } from '#lib/models/Composition';

type Config = Parameters<typeof cacheExchange>[0];

export const config: Config = {
  keys: {
    Composition: data => String(data.key),
  },
  updates: {
    Mutation: {
      deleteComposition: (result, args, cache) => {
        const query = gql`
          query {
            myCompositions {
              key
            }
          }
        `;

        cache.updateQuery({ query }, data => {
          if (data?.myCompositions) {
            data.myCompositions = data.myCompositions.filter(
              (c: Composition) => c.key !== args.compositionKey,
            );
          }
          return data;
        });
      },
      saveComposition: (result, args, cache) => {
        const query = gql`
          query {
            myCompositions {
              key
            }
          }
        `;

        cache.updateQuery({ query }, data => {
          const composition = result.saveComposition as Composition | null;

          if (composition && data?.myCompositions) {
            data.myCompositions = data.myCompositions.filter(
              (c: Composition) => c.key !== composition.key,
            );
            data.myCompositions.push(composition);
          }
          return data;
        });
      },
    },
  },
};
