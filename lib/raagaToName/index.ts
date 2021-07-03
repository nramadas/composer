import { Composition } from '#lib/models/Composition';
import { MelakartaRaaga, JanyaRaaga } from '#lib/models/Raaga';

import { janyaRaagaToEnglish } from './janyaRaagaToEnglish';
import { janyaRaagaToEnglishMuthu } from './janyaRaagaToEnglishMuthu';
import { melakartaRaagaToEnglish } from './melakartaRaagaToEnglish';
import { melakartaRaagaToEnglishMuthu } from './melakartaRaagaToEnglishMuthu';

export function raagaToName(
  raaga: Composition['raaga'],
  useDikshitar?: boolean,
) {
  if (raaga === 'RaagaMaalikaa') {
    return 'Rāgamālikā';
  }

  const melakarta = useDikshitar
    ? melakartaRaagaToEnglishMuthu(raaga as MelakartaRaaga)
    : melakartaRaagaToEnglish(raaga as MelakartaRaaga);

  if (melakarta) {
    return melakarta;
  }

  return useDikshitar
    ? janyaRaagaToEnglishMuthu(raaga as JanyaRaaga)
    : janyaRaagaToEnglish(raaga as JanyaRaaga);
}
