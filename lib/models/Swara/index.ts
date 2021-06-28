import { NoteLength } from '#lib/models/NoteLength';
import { Shruti } from '#lib/models/Shruti';
import { Sthayi } from '#lib/models/Sthayi';

export interface Swara {
  length: NoteLength;
  shruti: Shruti;
  sthayi: Sthayi;
}
