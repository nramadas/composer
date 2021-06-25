import { useContext, useEffect } from 'react';
import { useMutation } from 'urql';

import { AuthTokenContext } from '#components/providers/AuthToken';

import refreshSessionMutation from './refreshSession.gql';

export function TokenRefresher() {
  const { refresh, session, setSession } = useContext(AuthTokenContext);
  const [, refreshSession] = useMutation(refreshSessionMutation);

  useEffect(() => {
    if (typeof window !== undefined) {
      setTimeout(() => {
        refreshSession({ refreshToken: refresh }).then(result => {
          const newSession = result.data?.refreshSession?.session;

          if (newSession) {
            setSession(newSession);
          }
        });
      }, 1000 * 60 * 30);
    }
  }, [session, setSession]);

  return null;
}
