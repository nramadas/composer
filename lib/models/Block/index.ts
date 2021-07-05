import { Shruti } from '#lib/models/Shruti';
import { Sthayi } from '#lib/models/Sthayi';
import { NominalID } from '#lib/type/nominal';

export enum BlockType {
  Continue,
  Note,
  Undefined,
}

interface MetaData {
  key: NominalID<'block key'>;
  prev: string;
  next: string;
}

export interface ContinueBlock extends MetaData {
  type: BlockType.Continue;
  sthayi?: Sthayi;
  style: 1 | 2 | 3 | 4 | 6 | 8 | 12;
}

export interface NoteBlock extends MetaData {
  type: BlockType.Note;
  shruti: Shruti;
  sthayi: Sthayi;
  style: 1 | 2 | 3 | 4 | 6 | 8 | 12;
}

export interface UndefinedBlock extends MetaData {
  type: BlockType.Undefined;
  shruti?: Shruti;
  sthayi?: Sthayi;
  style: 1 | 2 | 3 | 4 | 6 | 8 | 12;
}

export type Block = ContinueBlock | NoteBlock | UndefinedBlock;
