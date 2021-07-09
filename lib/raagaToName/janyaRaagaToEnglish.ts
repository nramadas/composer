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

    // From Hanumatodi
    case JanyaRaaga.Janatodi:
      return 'Janatodi';
    case JanyaRaaga.AmritaDhanyaasi:
      return 'Amrita Dhanyāsi';
    case JanyaRaaga.Asaaveri:
      return 'Asāveri';
    case JanyaRaaga.Bhaanuchandrika:
      return 'Bhānuchandrika';
    case JanyaRaaga.Bhadratodi:
      return 'Bhadratodi';
    case JanyaRaaga.Bhoopaalam:
      return 'Bhoopālam';
    case JanyaRaaga.Chandrikatodi:
      return 'Chandrikatodi';
    case JanyaRaaga.Deshikatodi:
      return 'Deshikatodi';
    case JanyaRaaga.Dhanyaasi:
      return 'Dhanyāsi';
    case JanyaRaaga.Divyamaalati:
      return 'Divyamālati';
    case JanyaRaaga.Ghanta:
      return 'Ghanta';
    case JanyaRaaga.Kalaasaaveri:
      return 'Kalāsāveri';
    case JanyaRaaga.Kanakasaaveri:
      return 'Kanakasāveri';
    case JanyaRaaga.Naagavaraali:
      return 'Nāgavarāli';
    case JanyaRaaga.Prabhupriya:
      return 'Prabhupriya';
    case JanyaRaaga.Punnaagatodi:
      return 'Punnāgatodi';
    case JanyaRaaga.Punnagavarali:
      return 'Punnagavarali';
    case JanyaRaaga.Shravanamallika:
      return 'Shravanamallika';
    case JanyaRaaga.Sowjanya:
      return 'Sowjanya';
    case JanyaRaaga.ShuddhaSeemantini:
      return 'Shuddha Seemantini';
    case JanyaRaaga.ShuddhaTodi:
      return 'Shuddha Todi';
    case JanyaRaaga.Sindhubhairavi:
      return 'Sindhubhairavi';
    case JanyaRaaga.Swarnamalli:
      return 'Swarnamalli';

    // From Dhenuka
    case JanyaRaaga.Dhunibhinnashadjam:
      return 'Dhunibhinnashadjam';
    case JanyaRaaga.Bhinnashadjam:
      return 'Bhinnashadjam';
    case JanyaRaaga.Mohananaata:
      return 'Mohananāta';
    case JanyaRaaga.Udayaravichandrika:
      return 'Udayaravichandrika';
    case JanyaRaaga.Vasanthatodi:
      return 'Vasanthatodi';

    // From Nātakapriya
    case JanyaRaaga.Nataabharanam:
      return 'Natābharanam';
    case JanyaRaaga.Alankaarapriya:
      return 'Alankārapriya';
    case JanyaRaaga.Bhaagyashabari:
      return 'Bhāgyashabari';
    case JanyaRaaga.Deeparamu:
      return 'Deeparamu';
    case JanyaRaaga.Gunaavati:
      return 'Gunāvati';
    case JanyaRaaga.Hindoladeshikam:
      return 'Hindoladeshikam';
    case JanyaRaaga.Kanakadri:
      return 'Kanakadri';
    case JanyaRaaga.Maatangakaamini:
      return 'Mātangakāmini';
    case JanyaRaaga.Naatyadhaarana:
      return 'Nātyadhārana';
    case JanyaRaaga.Niranjana:
      return 'Niranjana';
    case JanyaRaaga.Shaanthabhaashini:
      return 'Shānthabhāshini';
    case JanyaRaaga.Shivashakti:
      return 'Shivashakti';

    // From Kokilapriyaa
    case JanyaRaaga.Kokilaaravam:
      return 'Kokilāravam';
    case JanyaRaaga.Chitramani:
      return 'Chitramani';
    case JanyaRaaga.Jnaanachintaamani:
      return 'Jnānachintāmani';
    case JanyaRaaga.Kowmaari:
      return 'Kowmāri';
    case JanyaRaaga.ShuddhaLalitha:
      return 'Shuddha Lalitha';
    case JanyaRaaga.Vardhani:
      return 'Vardhani';
    case JanyaRaaga.Vasantamalli:
      return 'Vasantamalli';
    case JanyaRaaga.Vasantanaaraayani:
      return 'Vasantanārāyani';

    // From Rupavati
    case JanyaRaaga.Rowpyanaka:
      return 'Rowpyanaka';
    case JanyaRaaga.Shyaamakalyaani:
      return 'Shyāmakalyāni';

    // From Gāyakapriya
    case JanyaRaaga.GeyaHejjajji:
      return 'Geya Hejjajji';
    case JanyaRaaga.Hejjajji:
      return 'Hejjajji';
    case JanyaRaaga.Kalaakaanti:
      return 'Kalākānti';
    case JanyaRaaga.Kalkada:
      return 'Kalkada';
    case JanyaRaaga.Kalpanadhaarini:
      return 'Kalpanadhārini';
  }
}
