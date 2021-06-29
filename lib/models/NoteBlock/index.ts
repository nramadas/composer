import { NoteLength } from '#lib/models/NoteLength';
import { Shruti } from '#lib/models/Shruti';
import { Sthayi } from '#lib/models/Sthayi';

export enum BlockType {
  Continuation,
  Multiple,
  Shruti,
  Skip,
  Undefined,
}

interface ContinuationBlock {
  type: BlockType.Continuation;
  length: 1 | 2;
}

interface MultipleChildNote {
  length:
    | NoteLength.L1b12
    | NoteLength.L1b6
    | NoteLength.L1b4
    | NoteLength.L1b3
    | NoteLength.L1b2;
  shruti: Shruti;
  sthayi: Sthayi;
}

interface MultipleBlock {
  type: BlockType.Multiple;
  children: (MultipleChildNote | null)[];
}

interface ShrutiBlock {
  type: BlockType.Shruti;
  shruti: Shruti;
  sthayi: Sthayi;
}

interface SkipBlock {
  type: BlockType.Skip;
}

interface UndefinedBlock {
  type: BlockType.Undefined;
}

export type NoteBlock =
  | ContinuationBlock
  | MultipleBlock
  | ShrutiBlock
  | SkipBlock
  | UndefinedBlock;
