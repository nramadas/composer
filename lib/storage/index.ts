import localforage from 'localforage';

import { Composition } from '#lib/models/Composition';

const compositionStorage = localforage.createInstance({
  name: 'compositions',
});

export function saveComposition(composition: Composition) {
  return compositionStorage.setItem(composition.key, composition);
}

export function deleteComposition(key: Composition['key']) {
  return compositionStorage.removeItem(key);
}

export function getAllCompositions() {
  return new Promise<Composition[]>(res => {
    const compositions: Composition[] = [];
    compositionStorage.iterate(
      (composition: Composition) => {
        compositions.push(composition);
      },
      () => res(compositions),
    );
  });
}
