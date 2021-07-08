import { useContext, useEffect, useRef } from 'react';
import { useQuery, UseQueryArgs } from 'urql';

import { AuthTokenContext } from '#components/providers/AuthToken';

export function useUserDependentQuery<Data = any, Variables = object>(
  args: UseQueryArgs<Variables, Data>,
) {
  const [result, reexecute] = useQuery<Data, Variables>(args);
  const { session } = useContext(AuthTokenContext);
  const skip = useRef(true);

  useEffect(() => {
    if (!skip.current) {
      reexecute({ requestPolicy: 'network-only' });
    } else {
      skip.current = false;
    }
  }, [session, skip]);

  return [result, reexecute] as const;
}
