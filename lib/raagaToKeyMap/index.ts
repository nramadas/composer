import { JanyaRaaga, MelakartaRaaga } from '#lib/models/Raaga';
import { Shruti } from '#lib/models/Shruti';
import { janyaRaagaToShruti } from '#lib/raagaToShruti/janyaRaagaToShruti';
import { melakartaRaagaToShruti } from '#lib/raagaToShruti/melakartaRaagaToShruti';

const POSITIONS = new Map();
POSITIONS.set(Shruti.S, 0);
POSITIONS.set(Shruti.R1, 1);
POSITIONS.set(Shruti.R2, 2);
POSITIONS.set(Shruti.R3, 3);
POSITIONS.set(Shruti.G1, 4);
POSITIONS.set(Shruti.G2, 5);
POSITIONS.set(Shruti.G3, 6);
POSITIONS.set(Shruti.M1, 7);
POSITIONS.set(Shruti.M2, 8);
POSITIONS.set(Shruti.P, 9);
POSITIONS.set(Shruti.D1, 10);
POSITIONS.set(Shruti.D2, 11);
POSITIONS.set(Shruti.D3, 12);
POSITIONS.set(Shruti.N1, 13);
POSITIONS.set(Shruti.N2, 14);
POSITIONS.set(Shruti.N3, 15);

function allNotes(raaga: JanyaRaaga | MelakartaRaaga) {
  const shruti = melakartaRaagaToShruti(raaga as MelakartaRaaga);

  if (shruti) {
    return [Shruti.S].concat(shruti);
  }

  const notes = new Set<Shruti>([Shruti.S]);

  const { aa, av } = janyaRaagaToShruti(raaga as JanyaRaaga);

  aa.forEach(s => notes.add(s));
  av.forEach(s => notes.add(s));
  return Array.from(notes.values()).sort(
    (a, b) => POSITIONS.get(a) - POSITIONS.get(b),
  );
}

const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'];

export function raagaToKeyMap(
  raaga: JanyaRaaga | MelakartaRaaga | 'RaagaMaalikaa',
) {
  const notes = allNotes(
    raaga === 'RaagaMaalikaa' ? MelakartaRaaga.Mayamalavagowla : raaga,
  );

  return notes.map((note, i) => ({
    key: keys[i],
    shruti: note,
  }));
}
