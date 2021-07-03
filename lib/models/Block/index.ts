import { Shruti } from '#lib/models/Shruti';
import { Sthayi } from '#lib/models/Sthayi';
import { NominalID } from '#lib/type/nominal';

export enum BlockType {
  Continue,
  Note,
  Skip,
  Undefined,
}

interface MetaData {
  key: NominalID<'block key'>;
  prev: string;
  next: string;
}

interface ContinueBlock extends MetaData {
  type: BlockType.Continue;
  style: 1 | 2;
}

interface NoteBlock extends MetaData {
  type: BlockType.Note;
  shruti: Shruti;
  sthayi: Sthayi;
  style: 1 | 2 | 3 | 4 | 6 | 8 | 12;
}

interface SkipBlock extends MetaData {
  type: BlockType.Skip;
}

interface UndefinedBlock extends MetaData {
  type: BlockType.Undefined;
  style: 1 | 2 | 3 | 4 | 6 | 8 | 12;
}

export type Block = ContinueBlock | NoteBlock | SkipBlock | UndefinedBlock;
