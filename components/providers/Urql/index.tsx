import { offlineExchange } from '@urql/exchange-graphcache';
import { makeDefaultStorage } from '@urql/exchange-graphcache/default-storage';
import { multipartFetchExchange } from '@urql/exchange-multipart-fetch';
import { persistedFetchExchange } from '@urql/exchange-persisted-fetch';
import React, { useRef } from 'react';
import { createClient, Provider, dedupExchange } from 'urql';

import { config } from '#lib/graphcache';

const isServerSide = typeof window === 'undefined';

const setupClient = (schema?: any) => {
  const exchanges: any = [];

  exchanges.push(dedupExchange);

  if (!isServerSide) {
    const storage = makeDefaultStorage({
      idbName: 'ThiruGanapathi',
      maxAge: 7,
    });

    exchanges.push(offlineExchange({ ...config, schema, storage }));
  }

  if (!isServerSide) {
    exchanges.push(
      persistedFetchExchange({
        preferGetForPersistedQueries: true,
      }),
    );
  }

  exchanges.push(multipartFetchExchange);

  return createClient({
    exchanges,
    url: process.env.RAZZLE_GQL_ENDPOINT!,
  });
};

interface Props {
  children?: React.ReactNode;
  initialState?: any;
  schema?: any;
}

export function URQLProvider(props: Props) {
  const client = useRef(setupClient(props.schema));
  return <Provider value={client.current}>{props.children}</Provider>;
}
