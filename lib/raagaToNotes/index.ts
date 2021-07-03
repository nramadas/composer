import { MelakartaRaaga, JanyaRaaga } from '#lib/models/Raaga';
import { Shruti } from '#lib/models/Shruti';
import { Sthayi } from '#lib/models/Sthayi';
import { janyaRaagaToShruti } from '#lib/raagaToShruti/janyaRaagaToShruti';
import { melakartaRaagaToShruti } from '#lib/raagaToShruti/melakartaRaagaToShruti';

export function raagaToNotes(raaga: MelakartaRaaga | JanyaRaaga) {
  const shruti = melakartaRaagaToShruti(raaga as MelakartaRaaga);

  if (shruti) {
    return {
      aa: shruti
        .map(s => ({
          shruti: s,
          sthayi: Sthayi.Mid,
        }))
        .concat({
          shruti: Shruti.S,
          sthayi: Sthayi.Up1,
        }),
      av: [
        {
          shruti: Shruti.S,
          sthayi: Sthayi.Up1,
        },
      ].concat(
        shruti.reverse().map(s => ({
          shruti: s,
          sthayi: Sthayi.Mid,
        })),
      ),
    };
  }

  const { aa, av } = janyaRaagaToShruti(raaga as JanyaRaaga);

  return {
    aa: aa
      .map(s => ({
        shruti: s,
        sthayi: Sthayi.Mid,
      }))
      .concat({
        shruti: Shruti.S,
        sthayi: Sthayi.Up1,
      }),
    av: [
      {
        shruti: Shruti.S,
        sthayi: Sthayi.Up1,
      },
    ].concat(
      av.map(s => ({
        shruti: s,
        sthayi: Sthayi.Mid,
      })),
    ),
  };
}
