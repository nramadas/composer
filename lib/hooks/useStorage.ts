import { useContext } from 'react';

import { StorageContext } from '#components/providers/Storage';

export function useStorage() {
  return useContext(StorageContext);
}
