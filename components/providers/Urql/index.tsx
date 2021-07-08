import { offlineExchange } from '@urql/exchange-graphcache';
import { makeDefaultStorage } from '@urql/exchange-graphcache/default-storage';
import { multipartFetchExchange } from '@urql/exchange-multipart-fetch';
import { persistedFetchExchange } from '@urql/exchange-persisted-fetch';
import React, { useContext, useEffect, useRef } from 'react';
import { createClient, Provider, dedupExchange } from 'urql';

import { AuthTokenContext } from '#components/providers/AuthToken';
import { config } from '#lib/graphcache';

const isServerSide = typeof window === 'undefined';

const setupClient = (
  getSession: { current: () => string | undefined },
  schema?: any,
) => {
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
    fetchOptions: () => ({
      headers: {
        Authorization: getSession.current()
          ? `Bearer ${getSession.current()}`
          : '',
      },
    }),
    suspense: isServerSide,
    url: process.env.RAZZLE_GQL_ENDPOINT!,
  });
};

interface Props {
  children?: React.ReactNode;
  initialState?: any;
  schema?: any;
}

export function URQLProvider(props: Props) {
  const { session } = useContext(AuthTokenContext);

  const getSession = useRef(() => session);

  useEffect(() => {
    getSession.current = () => session;
  }, [session]);

  const client = useRef(setupClient(getSession, props.schema));

  return <Provider value={client.current}>{props.children}</Provider>;
}
