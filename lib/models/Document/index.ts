import { Block } from '#lib/models/Block';

export interface Document {
  allBlocks: {
    [key: string]: Block;
  };
  head: Block['key'];
  numBeats: number;
}
