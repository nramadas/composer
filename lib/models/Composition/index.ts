import { Block } from '#lib/models/Block';
import { MelakartaRaaga, JanyaRaaga } from '#lib/models/Raaga';
import { ChapuTaala, SuladiSaptaTaala } from '#lib/models/Taala';
import { NominalID } from '#lib/type/nominal';

export interface Composition {
  blocks: Block[];
  composer: string;
  key: NominalID<'composition'>;
  lastUpdate: number;
  raaga: MelakartaRaaga | JanyaRaaga | 'RaagaMaalikaa';
  sectionTitles: {
    [key: number]: string;
  };
  taala: ChapuTaala | SuladiSaptaTaala;
  title: string;
  useDikshitarNames: boolean;
}
