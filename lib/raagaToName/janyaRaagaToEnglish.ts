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

    // From Vakulābharanam
    case JanyaRaaga.VaateeVasantabhairavi:
      return 'Vātee Vasantabhairavi';
    case JanyaRaaga.Aahiri:
      return 'Āhiri';
    case JanyaRaaga.Amudhasurabhi:
      return 'Amudhasurabhi';
    case JanyaRaaga.Devipriya:
      return 'Devipriya';
    case JanyaRaaga.Kalindaja:
      return 'Kalindaja';
    case JanyaRaaga.Kuvalayabharanam:
      return 'Kuvalayabharanam';
    case JanyaRaaga.Mukthipradayini:
      return 'Mukthipradayini';
    case JanyaRaaga.Sallapa:
      return 'Sallapa';
    case JanyaRaaga.Soma:
      return 'Soma';
    case JanyaRaaga.Suuryaa:
      return 'Sūryā';
    case JanyaRaaga.ShuddhaKaambhoji:
      return 'Shuddha Kāmbhoji';
    case JanyaRaaga.Vasantabhairavi:
      return 'Vasantabhairavi';
    case JanyaRaaga.VasantaMukhaari:
      return 'Vasanta Mukhāri';
    case JanyaRaaga.Vijayollaasini:
      return 'Vijayollāsini';

    // From Māyamālava Gowla
    case JanyaRaaga.Ardhradesi:
      return 'Ardhradesi';
    case JanyaRaaga.Bhaavini:
      return 'Bhāvini';
    case JanyaRaaga.Bibhaas:
      return 'Bibhās';
    case JanyaRaaga.Bowli:
      return 'Bowli';
    case JanyaRaaga.BowliRaamakriya:
      return 'Bowli Rāmakriya';
    case JanyaRaaga.Chaaruvardhani:
      return 'Chāruvardhani';
    case JanyaRaaga.Chaayagowla:
      return 'Chāyagowla';
    case JanyaRaaga.Chandrachooda:
      return 'Chandrachooda';
    case JanyaRaaga.Deshyagowla:
      return 'Deshyagowla';
    case JanyaRaaga.Devaranji:
      return 'Devaranji';
    case JanyaRaaga.Ekakshari:
      return 'Ekakshari';
    case JanyaRaaga.Ghanasindhu:
      return 'Ghanasindhu';
    case JanyaRaaga.Gowla:
      return 'Gowla';
    case JanyaRaaga.Gowlipantu:
      return 'Gowlipantu';
    case JanyaRaaga.Gowri:
      return 'Gowri';
    case JanyaRaaga.Gummakaambhoji:
      return 'Gummakāmbhoji';
    case JanyaRaaga.Gundakriya:
      return 'Gundakriya';
    case JanyaRaaga.Gurjari:
      return 'Gurjari';
    case JanyaRaaga.Jaganmohini:
      return 'Jaganmohini';
    case JanyaRaaga.Kalyaanakesari:
      return 'Kalyānakesari';
    case JanyaRaaga.Kannadabangaala:
      return 'Kannadabangāla';
    case JanyaRaaga.KarnaatakaSaaranga:
      return 'Karnātaka Sāranga';
    case JanyaRaaga.Lalitaa:
      return 'Lalitā';
    case JanyaRaaga.Lalitapanchamam:
      return 'Lalitapanchamam';
    case JanyaRaaga.Maalavakurinji:
      return 'Mālavakurinji';
    case JanyaRaaga.Maalavapanchamam:
      return 'Mālavapanchamam';
    case JanyaRaaga.Maargadesi:
      return 'Mārgadesi';
    case JanyaRaaga.Malahari:
      return 'Malahari';
    case JanyaRaaga.Mallikavasantam:
      return 'Mallikavasantam';
    case JanyaRaaga.Mangalakaishiki:
      return 'Mangalakaishiki';
    case JanyaRaaga.Manolayam:
      return 'Manolayam';
    case JanyaRaaga.Maruva:
      return 'Maruva';
    case JanyaRaaga.Mechabowli:
      return 'Mechabowli';
    case JanyaRaaga.Megharanjani:
      return 'Megharanjani';
    case JanyaRaaga.Nadanamakriya:
      return 'Nadanamakriya';
    case JanyaRaaga.Paadi:
      return 'Pādi';
    case JanyaRaaga.Pharaju:
      return 'Pharaju (Paras)';
    case JanyaRaaga.Poornalalita:
      return 'Poornalalita';
    case JanyaRaaga.Poorvi:
      return 'Poorvi';
    case JanyaRaaga.Poorvikavasanta:
      return 'Poorvikavasanta';
    case JanyaRaaga.Prataapadhanyaasi:
      return 'Pratāpadhanyāsi';
    case JanyaRaaga.Prataaparanjani:
      return 'Pratāparanjani';
    case JanyaRaaga.Puranirmai:
      return 'Puranirmai';
    case JanyaRaaga.Raamakali:
      return 'Rāmakali';
    case JanyaRaaga.Raamakriya:
      return 'Rāmakriya';
    case JanyaRaaga.Revagupti:
      return 'Revagupti';
    case JanyaRaaga.Rukhmaambari:
      return 'Rukhmāmbari';
    case JanyaRaaga.Saamantadeepara:
      return 'Sāmantadeepara';
    case JanyaRaaga.SaarangaNaata:
      return 'Sāranga Nāta';
    case JanyaRaaga.Saaveri:
      return 'Sāveri';
    case JanyaRaaga.Salanganaata:
      return 'Salanganāta';
    case JanyaRaaga.Satyaavati:
      return 'Satyāvati';
    case JanyaRaaga.SindhuRaamakriya:
      return 'Sindhu Rāmakriya';
    case JanyaRaaga.Surasindhu:
      return 'Surasindhu';
    case JanyaRaaga.Taarakagowla:
      return 'Tārakagowla';
    case JanyaRaaga.Takka:
      return 'Takka';
    case JanyaRaaga.Ushaavali:
      return 'Ushāvali';
    case JanyaRaaga.Vishaarada:
      return 'Vishārada';

    // From Chakravākam
    case JanyaRaaga.Toyavegavaahini:
      return 'Toyavegavāhini';
    case JanyaRaaga.AahirBhairavi:
      return 'Āhir Bhairavi';
    case JanyaRaaga.Bhakthapriya:
      return 'Bhakthapriya';
    case JanyaRaaga.Bhujaangini:
      return 'Bhujāngini';
    case JanyaRaaga.Bindhumaalini:
      return 'Bindhumālini';
    case JanyaRaaga.Chakranaaraayani:
      return 'Chakranārāyani';
    case JanyaRaaga.Ghoshini:
      return 'Ghoshini';
    case JanyaRaaga.Guhapriya:
      return 'Guhapriya';
    case JanyaRaaga.Kalaavati:
      return 'Kalāvati';
    case JanyaRaaga.Kokilaa:
      return 'Kokilā';
    case JanyaRaaga.Malayamaarutam:
      return 'Malayamārutam';
    case JanyaRaaga.Mukthaangi:
      return 'Mukthāngi';
    case JanyaRaaga.Mukundamaalini:
      return 'Mukundamālini';
    case JanyaRaaga.Poornapanchamam:
      return 'Poornapanchamam';
    case JanyaRaaga.Pravritti:
      return 'Pravritti';
    case JanyaRaaga.Raagamanjari:
      return 'Rāgamanjari';
    case JanyaRaaga.Rasikaranjani:
      return 'Rasikaranjani';
    case JanyaRaaga.RudraPanchami:
      return 'Rudra Panchami';
    case JanyaRaaga.ShreeNabhomaargini:
      return 'Shree Nabhomārgini';
    case JanyaRaaga.Shyaamali:
      return 'Shyāmali';
    case JanyaRaaga.Subhaashini:
      return 'Subhāshini';
    case JanyaRaaga.Valaji:
      return 'Valaji';
    case JanyaRaaga.Veenadhaari:
      return 'Veenadhāri';
    case JanyaRaaga.Vegavaahini:
      return 'Vegavāhini';
  }
}
