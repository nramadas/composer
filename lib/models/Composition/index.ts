import { MelakartaRaaga, JanyaRaaga } from '#lib/models/Raaga';
import { Swara } from '#lib/models/Swara';
import { ChapuTaala, SuladiSaptaTaala } from '#lib/models/Taala';

export interface Composition {
  composer: string;
  raaga: MelakartaRaaga | JanyaRaaga | 'RaagaMaalikaa';
  swara: Swara[];
  taala: ChapuTaala | SuladiSaptaTaala;
  title: string;
  transcriber: string;
}
