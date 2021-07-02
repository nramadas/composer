import { MelakartaRaaga, JanyaRaaga } from '#lib/models/Raaga';
import { Swara } from '#lib/models/Swara';
import { Taala } from '#lib/models/Taala';

export interface Composition {
  composer: string;
  raaga: MelakartaRaaga | JanyaRaaga | 'RaagaMaalikaa';
  swara: Swara[];
  taala: Taala;
  title: string;
  transcriber: string;
}
