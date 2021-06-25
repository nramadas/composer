import { cacheExchange } from '@urql/exchange-graphcache';
import { multipartFetchExchange } from '@urql/exchange-multipart-fetch';
import { persistedFetchExchange } from '@urql/exchange-persisted-fetch';
import React, { useContext, useEffect, useRef } from 'react';
import { createClient, Provider, ssrExchange, dedupExchange } from 'urql';

import { AuthTokenContext } from '#components/providers/AuthToken';
import { config } from '#lib/graphcache';

type SSRExchange = ReturnType<typeof ssrExchange>;

const isServerSide = typeof window === 'undefined';

const setupClient = (
  ssr: SSRExchange,
  getSession: { current: () => string | undefined },
  schema?: any,
) => {
  const exchanges: any = [];

  exchanges.push(dedupExchange);
  exchanges.push(cacheExchange({ ...config, schema }));
  exchanges.push(ssr);

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
  ssrExchange?: SSRExchange;
}

export function URQLProvider(props: Props) {
  const { session } = useContext(AuthTokenContext);
  const ssr =
    props.ssrExchange ||
    ssrExchange({
      isClient: !isServerSide,
      initialState: props.initialState,
    });

  const getSession = useRef(() => session);

  useEffect(() => {
    getSession.current = () => session;
  }, [session]);

  const client = useRef(setupClient(ssr, getSession, props.schema));

  return <Provider value={client.current}>{props.children}</Provider>;
}
