import React, { createContext, useCallback, useEffect, useState } from 'react';

import { AuthToken } from '#lib/models/AuthToken';

interface Props {
  children?: React.ReactNode;
  initialRefresh?: AuthToken['refresh'];
  initialSession?: AuthToken['session'];
  preserveRefresh?(token: AuthToken['refresh']): void;
  preserveSession?(token: AuthToken['session']): void;
}

interface AuthTokenDetails {
  refresh?: AuthToken['refresh'];
  session?: AuthToken['session'];
  setRefresh(token: AuthToken['refresh']): void;
  setSession(token: AuthToken['session']): void;
}

export const AuthTokenContext = createContext<AuthTokenDetails>({
  refresh: undefined,
  session: undefined,
  setRefresh: () => {},
  setSession: () => {},
});

export function AuthTokenProvider(props: Props) {
  const {
    children,
    initialRefresh,
    initialSession,
    preserveRefresh,
    preserveSession,
  } = props;

  const [refresh, _setRefresh] =
    useState<AuthTokenDetails['refresh']>(initialRefresh);
  const [session, _setSession] =
    useState<AuthTokenDetails['session']>(initialSession);

  const setRefresh = useCallback(
    (token: AuthToken['refresh']) => {
      _setRefresh(token);
      preserveRefresh?.(token);
    },
    [_setRefresh, preserveRefresh],
  );

  const setSession = useCallback(
    (token: AuthToken['session']) => {
      _setSession(token);
      preserveSession?.(token);
    },
    [_setSession, preserveSession],
  );

  return (
    <AuthTokenContext.Provider
      value={{
        refresh,
        setRefresh,
        session,
        setSession,
      }}
    >
      {children}
    </AuthTokenContext.Provider>
  );
}
