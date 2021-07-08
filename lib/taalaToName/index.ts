import { Composition } from '#lib/models/Composition';
import { ChapuTaala, SuladiSaptaTaala } from '#lib/models/Taala';

import { chapuTaalaToEnglish } from './chapuTaalaToEnglish';
import { suladiSaptaTaalaToEnglish } from './suladiSaptaTaalaToEnglish';

export function taalaToName(taala: Composition['taala']) {
  const result = suladiSaptaTaalaToEnglish(taala as SuladiSaptaTaala);

  if (result) {
    return result;
  }

  return chapuTaalaToEnglish(taala as ChapuTaala);
}
