import React, { createContext, useEffect, useState } from 'react';

import { Composition } from '#lib/models/Composition';
import * as storageFns from '#lib/storage';

interface Props {
  children?: React.ReactNode;
}

interface StorageDetails {
  compositions: Composition[];
  deleteComposition: typeof storageFns.deleteComposition;
  getAllCompositions: typeof storageFns.getAllCompositions;
  saveComposition: typeof storageFns.saveComposition;
}

export const StorageContext = createContext<StorageDetails>({
  compositions: [],
  deleteComposition: () => Promise.resolve(),
  getAllCompositions: () => Promise.resolve([]),
  saveComposition: composition => Promise.resolve(composition),
});

export function StorageProvider(props: Props) {
  const { children } = props;
  const [compositions, setCompositions] = useState<Composition[]>([]);

  useEffect(() => {
    storageFns.getAllCompositions().then(all => {
      setCompositions(all);
    });
  }, []);

  return (
    <StorageContext.Provider
      value={{
        compositions,
        deleteComposition: async key => {
          await storageFns.deleteComposition(key);
          const remaining = await storageFns.getAllCompositions();
          setCompositions(remaining);
        },
        getAllCompositions: storageFns.getAllCompositions,
        saveComposition: async composition => {
          const result = await storageFns.saveComposition(composition);
          const all = await storageFns.getAllCompositions();
          setCompositions(all);
          return result;
        },
      }}
    >
      {children}
    </StorageContext.Provider>
  );
}
