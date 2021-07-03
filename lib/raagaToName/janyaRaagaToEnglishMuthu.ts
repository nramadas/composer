import { JanyaRaaga } from '#lib/models/Raaga';

export function janyaRaagaToEnglishMuthu(raaga: JanyaRaaga) {
  switch (raaga) {
    // From 'Kanakangi'
    case JanyaRaaga.Kanakaambari:
      return 'Kanakāmbari';
    case JanyaRaaga.Kanakatodi:
      return 'Kanakatōdi';
    case JanyaRaaga.Maadhavapriyaa:
      return 'Mādhavapriyā';
    case JanyaRaaga.KarnaatakaShuddhaSaaveri:
      return 'Shuddha Sāveri';
    case JanyaRaaga.Latantapriya:
      return 'Latantapriya';
    case JanyaRaaga.Lavangi:
      return 'Lavangi';
    case JanyaRaaga.Megha:
      return 'Megha';
    case JanyaRaaga.Rishabhavilaasa:
      return 'Rishabhavilāsa';
    case JanyaRaaga.Sarvashree:
      return 'Sarvashree';
    case JanyaRaaga.SuddhaMukhaari:
      return 'Suddha Mukhāri';
    case JanyaRaaga.Tatillatika:
      return 'Tatillatika';
    case JanyaRaaga.Vaageeshwari:
      return 'Vāgeeshwari';

    // From 'Rathnāngi'
    case JanyaRaaga.Phenadhyuti:
      return 'Phenadhyuti';
    case JanyaRaaga.Ganamukhaari:
      return 'Ganamukhāri';
    case JanyaRaaga.Ratnavaraali:
      return 'Ratnavarāli';
    case JanyaRaaga.Revati:
      return 'Revati';
    case JanyaRaaga.Shreemani:
      return 'Shreemani';
    case JanyaRaaga.Shreemati:
      return 'Shreemati';
    case JanyaRaaga.Svadhya:
      return 'Svadhya';
  }
}
