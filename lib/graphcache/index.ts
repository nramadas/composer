import { cacheExchange } from '@urql/exchange-graphcache';

type Config = Parameters<typeof cacheExchange>[0];

export const config: Config = {
  keys: {},
  updates: {
    Mutation: {},
  },
};
