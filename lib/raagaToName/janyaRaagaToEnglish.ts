import { JanyaRaaga } from '#lib/models/Raaga';

export function janyaRaagaToEnglish(raaga: JanyaRaaga) {
  switch (raaga) {
    // From 'Kanakangi'
    case JanyaRaaga.Kanakaambari:
      return 'Kanakāmbari';
    case JanyaRaaga.Kanakatodi:
      return 'Kanakatōdi';
    case JanyaRaaga.Maadhavapriyaa:
      return 'Mādhavapriyā';
    case JanyaRaaga.KarnaatakaShuddhaSaaveri:
      return 'Karnātaka Shuddha Sāveri';
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

    // From Gānamoorti
    case JanyaRaaga.Gaanasaamavaraali:
      return 'Gānasāmavarāli';
    case JanyaRaaga.Bhinnapanchamam:
      return 'Bhinnapanchamam';
    case JanyaRaaga.Naadharanjani:
      return 'Nādharanjani';
    case JanyaRaaga.Poorvavaraali:
      return 'Poorvavarāli';
    case JanyaRaaga.Saamavaraali:
      return 'Sāmavarāli';

    // From Vanaspati
    case JanyaRaaga.Bhaanumati:
      return 'Bhānumati';
    case JanyaRaaga.Rasaali:
      return 'Rasāli';
    case JanyaRaaga.Vanaavali:
      return 'Vanāvali';
    case JanyaRaaga.Vittalapriya:
      return 'Vittalapriya';

    // From Mānavati
    case JanyaRaaga.Manoranjani:
      return 'Manoranjani';
    case JanyaRaaga.Ghanashyaamalaa:
      return 'Ghanashyāmalā';
    case JanyaRaaga.Kunjari:
      return 'Kunjari';

    // From Tānaroopi
    case JanyaRaaga.Tanukeerti:
      return 'Tanukeerti';

    // From Senāvati
    case JanyaRaaga.Senaagrani:
      return 'Senāgrani';
    case JanyaRaaga.Bhogi:
      return 'Bhogi';
    case JanyaRaaga.Chitthakarshani:
      return 'Chitthakarshani';
    case JanyaRaaga.NavarasaMaalaa:
      return 'Navarasa Mālā';
    case JanyaRaaga.SindhuGowri:
      return 'Sindhu Gowri';
  }
}
