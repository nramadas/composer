import { useUserDependentQuery } from '#lib/hooks/useUserDependentQuery';

import fetchUserQuery from './fetchUser.gql';

export function InitialUserFetch() {
  useUserDependentQuery({
    query: fetchUserQuery,
    requestPolicy: 'network-only',
  });

  return null;
}
