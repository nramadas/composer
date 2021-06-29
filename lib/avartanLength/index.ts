import { Anga } from '#lib/models/Anga';

export const LENGTHS = new Map();
LENGTHS.set(Anga.A1, 1);
LENGTHS.set(Anga.A2, 2);
LENGTHS.set(Anga.A3, 3);
LENGTHS.set(Anga.A4, 4);
LENGTHS.set(Anga.A5, 5);
LENGTHS.set(Anga.A7, 7);
LENGTHS.set(Anga.A9, 9);

export function avartanLength(anga: Anga[]) {
  return anga.reduce((acc, a) => acc + LENGTHS.get(a), 0);
}
