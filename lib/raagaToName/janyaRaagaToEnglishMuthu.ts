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

    // From Sooryakāntam
    case JanyaRaaga.Chaayaavathi:
      return 'Chāyāvathi';
    case JanyaRaaga.Bhairavam:
      return 'Bhairavam';
    case JanyaRaaga.Haridarpa:
      return 'Haridarpa';
    case JanyaRaaga.Jayasamvardhani:
      return 'Jayasamvardhani';
    case JanyaRaaga.Jeevantikaa:
      return 'Jeevantikā';
    case JanyaRaaga.Kusumamaaruta:
      return 'Kusumamāruta';
    case JanyaRaaga.Naagachooḍaamani:
      return 'Nāgachooḍāmani';
    case JanyaRaaga.Rohini:
      return 'Rohini';
    case JanyaRaaga.Saamakannada:
      return 'Sāmakannada';
    case JanyaRaaga.Sowraashtram:
      return 'Sowrāshtram';
    case JanyaRaaga.SuddhaGowla:
      return 'Suddha Gowla';
    case JanyaRaaga.Supradeepam:
      return 'Supradeepam';
    case JanyaRaaga.Vasanthaa:
      return 'Vasanthā';

    // From Hatakāmbari
    case JanyaRaaga.Jayashuddhamaalavi:
      return 'Jayashuddhamālavi';
    case JanyaRaaga.Hamsanantini:
      return 'Hamsanantini';
    case JanyaRaaga.Kallola:
      return 'Kallola';
    case JanyaRaaga.Simhala:
      return 'Simhala';

    // From Jhankāradhvani
    case JanyaRaaga.Jhankaarabhramari:
      return 'Jhankārabhramari';
    case JanyaRaaga.Bhaarati:
      return 'Bhārati';
    case JanyaRaaga.Chittaranjani:
      return 'Chittaranjani';
    case JanyaRaaga.Jalmika:
      return 'Jalmika';
    case JanyaRaaga.Lalitabhairavi:
      return 'Lalitabhairavi';

    // From Natabhairavi
    case JanyaRaaga.Naareereetigowla:
      return 'Nārērētigowla';
    case JanyaRaaga.Abheri:
      return 'Abheri';
    case JanyaRaaga.Anandabhairavi:
      return 'Anandabhairavi';
    case JanyaRaaga.Amrithavaahini:
      return 'Amrithavāhini';
    case JanyaRaaga.Bhairavi:
      return 'Bhairavi';
    case JanyaRaaga.Bhuvanagaandhaari:
      return 'Bhuvanagāndhāri';
    case JanyaRaaga.Chapagantarva:
      return 'Chapagantarva';
    case JanyaRaaga.DarbaariKaanada:
      return 'Darbāri Kānada';
    case JanyaRaaga.Devakriya:
      return 'Devakriya';
    case JanyaRaaga.Dhanashree:
      return 'Dhanashree';
    case JanyaRaaga.Dharmaprakaashini:
      return 'Dharmaprakāshini';
    case JanyaRaaga.DilipikaVasantha:
      return 'Dilipika Vasantha';
    case JanyaRaaga.Divyagaandhaari:
      return 'Divyagāndhāri';
    case JanyaRaaga.Gopikaavasantam:
      return 'Gopikāvasantam';
    case JanyaRaaga.Hindolam:
      return 'Hindolam';
    case JanyaRaaga.Hindolavasanta:
      return 'Hindolavasanta';
    case JanyaRaaga.Indughantarava:
      return 'Indughantarava';
    case JanyaRaaga.Jayanthashrii:
      return 'Jayanthashrī';
    case JanyaRaaga.Jingala:
      return 'Jingaḷa';
    case JanyaRaaga.Jonpuri:
      return 'Jonpuri';
    case JanyaRaaga.Kaatyaayani:
      return 'Kātyāyani';
    case JanyaRaaga.Kanakavasantham:
      return 'Kanakavasantham';
    case JanyaRaaga.Kshanika:
      return 'Kshanika';
    case JanyaRaaga.Maanji:
      return 'Mānji';
    case JanyaRaaga.Mahati:
      return 'Mahati';
    case JanyaRaaga.Malkosh:
      return 'Malkosh';
    case JanyaRaaga.Maargahindoolam:
      return 'Mārgahindōḻaṃ';
    case JanyaRaaga.Naagagaandhaari:
      return 'Nāgagāndhāri';
    case JanyaRaaga.NavarathnaVilaasam:
      return 'Navarathna Vilāsam';
    case JanyaRaaga.Niilamati:
      return 'Nīlamati';
    case JanyaRaaga.Niilaveni:
      return 'Nīlaveni';
    case JanyaRaaga.Poornashadjam:
      return 'Poornashađjam';
    case JanyaRaaga.Raajaraajeshwari:
      return 'Rājarājeshwari';
    case JanyaRaaga.Saaramati:
      return 'Sāramati';
    case JanyaRaaga.SaarangaKaapi:
      return 'Sāranga Kāpi';
    case JanyaRaaga.Sharadapriya:
      return 'Sharadapriya';
    case JanyaRaaga.ShreeNavarasachandrika:
      return 'Shree Navarasachandrika';
    case JanyaRaaga.SindhuDhanyaasi:
      return 'Sindhu Dhanyāsi';
    case JanyaRaaga.ShuddhaDesi:
      return 'Shuddha Desi';
    case JanyaRaaga.ShuddhaSaalavi:
      return 'Shuddha Sālavi';
    case JanyaRaaga.Sukumaari:
      return 'Sukumāri';
    case JanyaRaaga.Sushama:
      return 'Sushama';
    case JanyaRaaga.Sutradhaari:
      return 'Sutradhāri';
    case JanyaRaaga.Tarkshika:
      return 'Tarkshika';
    case JanyaRaaga.Udayaraaga:
      return 'Udayarāga';
    case JanyaRaaga.Vasantavaraali:
      return 'Vasantavarāli';

    // From Keeravāni
    case JanyaRaaga.Keeranaavali:
      return 'Keeranāvali';
    case JanyaRaaga.Aymmukhan:
      return 'Aymmukhan';
    case JanyaRaaga.Bhaanupriya:
      return 'Bhānupriya';
    case JanyaRaaga.Chandrika:
      return 'Chandrika';
    case JanyaRaaga.Gaganabhoopaalam:
      return 'Gaganabhoopālam';
    case JanyaRaaga.Hamsapancama:
      return 'Hamsapancama';
    case JanyaRaaga.Hamsavaahini:
      return 'Hamsavāhini';
    case JanyaRaaga.Jayashree:
      return 'Jayashree';
    case JanyaRaaga.Kadaram:
      return 'Kadaram';
    case JanyaRaaga.KalyaanaVasantam:
      return 'Kalyāna Vasantam';
    case JanyaRaaga.Kusumaavali:
      return 'Kusumāvali';
    case JanyaRaaga.Maadhavi:
      return 'Mādhavi';
    case JanyaRaaga.Priyadarshani:
      return 'Priyadarshani';
    case JanyaRaaga.Rishipriya:
      return 'Rishipriya';
    case JanyaRaaga.Saamapriya:
      return 'Sāmapriya';
    case JanyaRaaga.Shrothasvini:
      return 'Shrothasvini';
    case JanyaRaaga.Vasanthamanohari:
      return 'Vasanthamanohari';

    // From Kharaharapriya
    case JanyaRaaga.Shree:
      return 'Shree';
    case JanyaRaaga.Andolikaa:
      return 'Andolikā';
    case JanyaRaaga.Abhogi:
      return 'Abhogi';
    case JanyaRaaga.AadiKaapi:
      return 'Ādi Kāpi';
    case JanyaRaaga.Aaryamati:
      return 'Āryamati';
    case JanyaRaaga.Agnikopa:
      return 'Agnikopa';
    case JanyaRaaga.Baalachandrika:
      return 'Bālachandrika';
    case JanyaRaaga.BasantBahaar:
      return 'Basant Bahār';
    case JanyaRaaga.Bhaageshri:
      return 'Bhāgeshri';
    case JanyaRaaga.Bhagavatapriya:
      return 'Bhagavatapriya';
    case JanyaRaaga.Bhagavathpriya:
      return 'Bhagavathpriya';
    case JanyaRaaga.Bhimpalaas:
      return 'Bhimpalās';
    case JanyaRaaga.BrindaavanaSaaranga:
      return 'Brindāvana Sāranga';
    case JanyaRaaga.Brindaavani:
      return 'Brindāvani';
    case JanyaRaaga.Chakrapradipta:
      return 'Chakrapradipta';
    case JanyaRaaga.Darbar:
      return 'Darbar';
    case JanyaRaaga.Dayavati:
      return 'Dayavati';
    case JanyaRaaga.Devaamruthavarshani:
      return 'Devāmruthavarshani';
    case JanyaRaaga.DevaManohari:
      return 'Deva Manohari';
    case JanyaRaaga.Dhanakaapi:
      return 'Dhanakāpi';
    case JanyaRaaga.Dilipika:
      return 'Dilipika';
    case JanyaRaaga.Durga:
      return 'Durga';
    case JanyaRaaga.GowlaKannada:
      return 'Gowla Kannada';
    case JanyaRaaga.HamsaAabheri:
      return 'Hamsa Ābheri';
    case JanyaRaaga.Haridasapriya:
      return 'Haridasapriya';
    case JanyaRaaga.Harinaaraayani:
      return 'Harinārāyani';
    case JanyaRaaga.HindustaaniKaapi:
      return 'Hindustāni Kāpi';
    case JanyaRaaga.Huseni:
      return 'Huseni';
    case JanyaRaaga.Jataadhaari:
      return 'Jatādhāri';
    case JanyaRaaga.Jayamanohari:
      return 'Jayamanohari';
    case JanyaRaaga.Jayanaaraayani:
      return 'Jayanārāyani';
    case JanyaRaaga.Jayanthasena:
      return 'Jayanthasena';
    case JanyaRaaga.Kanadaa:
      return 'Kanadā';
    case JanyaRaaga.Kaapi:
      return 'Kāpi';
    case JanyaRaaga.Kaapijingala:
      return 'Kāpijingala';
    case JanyaRaaga.Kalaanidhi:
      return 'Kalānidhi';
    case JanyaRaaga.Kalika:
      return 'Kalika';
    case JanyaRaaga.Kannadagowla:
      return 'Kannadagowla';
    case JanyaRaaga.KarnaatakaHindolam:
      return 'Karnātaka Hindolam';
    case JanyaRaaga.KarnaatakaKaapi:
      return 'Karnātaka Kāpi';
    case JanyaRaaga.KarnaatakaDevagaandhari:
      return 'Karnātaka Devagāndhari';
    case JanyaRaaga.Karnaranjani:
      return 'Karnaranjani';
    case JanyaRaaga.Kowmodaki:
      return 'Kowmodaki';
    case JanyaRaaga.Kowshika:
      return 'Kowshika';
    case JanyaRaaga.Lalitamanohari:
      return 'Lalitamanohari';
    case JanyaRaaga.Maadhavamanohari:
      return 'Mādhavamanohari';
    case JanyaRaaga.Maalavashree:
      return 'Mālavashree';
    case JanyaRaaga.Maayapradeeptam:
      return 'Māyapradeeptam';
    case JanyaRaaga.Madhyamaraavali:
      return 'Madhyamarāvali';
    case JanyaRaaga.Madhyamaavathi:
      return 'Madhyamāvathi';
    case JanyaRaaga.Mahaanandhi:
      return 'Mahānandhi';
    case JanyaRaaga.Mandaamari:
      return 'Mandāmari';
    case JanyaRaaga.Mangalaavathi:
      return 'Mangalāvathi';
    case JanyaRaaga.Manirangu:
      return 'Manirangu';
    case JanyaRaaga.Manjari:
      return 'Manjari';
    case JanyaRaaga.Manohari:
      return 'Manohari';
    case JanyaRaaga.Manorama:
      return 'Manorama';
    case JanyaRaaga.Maruvadhanyaasi:
      return 'Maruvadhanyāsi';
    case JanyaRaaga.Mishramanolayam:
      return 'Mishramanolayam';
    case JanyaRaaga.Mishrashivaranjani:
      return 'Mishrashivaranjani';
    case JanyaRaaga.MiyanMalhaar:
      return 'Miyan Malhār';
    case JanyaRaaga.Mukhaari:
      return 'Mukhāri';
    case JanyaRaaga.Naadachintaamani:
      return 'Nādachintāmani';
    case JanyaRaaga.Naadataarangini:
      return 'Nādatārangini';
    case JanyaRaaga.Naadavarangini:
      return 'Nādavarangini';
    case JanyaRaaga.Naagari:
      return 'Nāgari';
    case JanyaRaaga.Naagavalli:
      return 'Nāgavalli';
    case JanyaRaaga.Naayaki:
      return 'Nāyaki';
    case JanyaRaaga.Nigamagaamini:
      return 'Nigamagāmini';
    case JanyaRaaga.Nirmalaangi:
      return 'Nirmalāngi';
    case JanyaRaaga.Omkaari:
      return 'Omkāri';
    case JanyaRaaga.Panchamam:
      return 'Panchamam';
    case JanyaRaaga.Patadeep:
      return 'Patadeep';
    case JanyaRaaga.Phalamanjari:
      return 'Phalamanjari';
    case JanyaRaaga.Phalaranjani:
      return 'Phalaranjani';
    case JanyaRaaga.Peeloo:
      return 'Peeloo';
    case JanyaRaaga.Poornakalaanidhi:
      return 'Poornakalānidhi';
    case JanyaRaaga.Pushpalathika:
      return 'Pushpalathika';
    case JanyaRaaga.Ratipatipriya:
      return 'Ratipatipriya';
    case JanyaRaaga.Reethigowla:
      return 'Reethigowla';
    case JanyaRaaga.Rudrapriyaa:
      return 'Rudrapriyā';
    case JanyaRaaga.Saalagabhairavi:
      return 'Sālagabhairavi';
    case JanyaRaaga.Saarang:
      return 'Sārang';
    case JanyaRaaga.Saindhavi:
      return 'Saindhavi';
    case JanyaRaaga.Sangrama:
      return 'Sangrama';
    case JanyaRaaga.Sankraandanapriyaa:
      return 'Sankrāndanapriyā';
    case JanyaRaaga.Sarvachoodaamani:
      return 'Sarvachoodāmani';
    case JanyaRaaga.Shivapriyaa:
      return 'Shivapriyā';
    case JanyaRaaga.Shivaranjani:
      return 'Shivaranjani';
    case JanyaRaaga.ShreeManohari:
      return 'Shree Manohari';
    case JanyaRaaga.ShreeManoranjani:
      return 'Shree Manoranjani';
    case JanyaRaaga.Shreeranjani:
      return 'Shreeranjani';
    case JanyaRaaga.Siddhasena:
      return 'Siddhasena';
    case JanyaRaaga.SuddhaBangaala:
      return 'Suddha Bangāla';
    case JanyaRaaga.SuddhaBhairavi:
      return 'Suddha Bhairavi';
    case JanyaRaaga.SuddhaDhanyaasi:
      return 'Suddha Dhanyāsi';
    case JanyaRaaga.SuddhaHindolam:
      return 'Suddha Hindolam';
    case JanyaRaaga.SuddhaManohari:
      return 'Suddha Manohari';
    case JanyaRaaga.SuddhaVelaavali:
      return 'Suddha Velāvali';
    case JanyaRaaga.Sugunabhooshani:
      return 'Sugunabhooshani';
    case JanyaRaaga.Swarabhooshani:
      return 'Swarabhooshani';
    case JanyaRaaga.Swarakalaanidhi:
      return 'Swarakalānidhi';
    case JanyaRaaga.Swararanjani:
      return 'Swararanjani';
    case JanyaRaaga.Tavamukhaari:
      return 'Tavamukhāri';
    case JanyaRaaga.Vajrakaanti:
      return 'Vajrakānti';

    // From Gowri Manohari
    case JanyaRaaga.Gowrivelaavali:
      return 'Gowrivelāvali';
    case JanyaRaaga.Gowrishankar:
      return 'Gowrishankar';
    case JanyaRaaga.Hamsadeepika:
      return 'Hamsadeepika';
    case JanyaRaaga.Hrudkamali:
      return 'Hrudkamali';
    case JanyaRaaga.Lavanthika:
      return 'Lavanthika';
    case JanyaRaaga.Sundaramanohari:
      return 'Sundaramanohari';
    case JanyaRaaga.Vasantashree:
      return 'Vasantashree';
    case JanyaRaaga.Velaavali:
      return 'Velāvali';

    // From Varunapriyaa
    case JanyaRaaga.Veeravasantham:
      return 'Veeravasantham';

    // From Māraranjani
    case JanyaRaaga.Sharaavathi:
      return 'Sharāvathi';
    case JanyaRaaga.Devasalaga:
      return 'Devasalaga';
    case JanyaRaaga.Kesari:
      return 'Kesari';
    case JanyaRaaga.Gayakamandini:
      return 'Gayakamandini';
    case JanyaRaaga.Raajathilaka:
      return 'Rājathilaka';

    // From Chārukeshi
    case JanyaRaaga.Tarangini:
      return 'Tarangini';
    case JanyaRaaga.Chirswaroopi:
      return 'Chirswaroopi';
    case JanyaRaaga.Maaravi:
      return 'Māravi';
    case JanyaRaaga.Poorvadhanyaasi:
      return 'Poorvadhanyāsi';
    case JanyaRaaga.ShivaManohari:
      return 'Shiva Manohari';
    case JanyaRaaga.Shukrajyothi:
      return 'Shukrajyothi';
    case JanyaRaaga.Ushaabharanam:
      return 'Ushābharanam';

    // From Sarasāngi
    case JanyaRaaga.Sowrasenaa:
      return 'Sowrasenā';
    case JanyaRaaga.Haripriya:
      return 'Haripriya';
    case JanyaRaaga.Srirangapriya:
      return 'Srirangapriya';
    case JanyaRaaga.KamalaaManohari:
      return 'Kamalā Manohari';
    case JanyaRaaga.Madhulika:
      return 'Madhulika';
    case JanyaRaaga.Nalinakaanthi:
      return 'Nalinakānthi';
    case JanyaRaaga.Neelamani:
      return 'Neelamani';
    case JanyaRaaga.Salavi:
      return 'Salavi';
    case JanyaRaaga.Sarasaanana:
      return 'Sarasānana';
    case JanyaRaaga.Saraseeruha:
      return 'Saraseeruha';
    case JanyaRaaga.Simhavaahini:
      return 'Simhavāhini';
    case JanyaRaaga.Surasena:
      return 'Surasena';
    case JanyaRaaga.Vasanthi:
      return 'Vasanthi';

    // From Harikāmbhoji
    case JanyaRaaga.Harikedaaragowla:
      return 'Harikedāragowla';
    case JanyaRaaga.Ambhojini:
      return 'Ambhojini';
    case JanyaRaaga.Andhali:
      return 'Andhali';
    case JanyaRaaga.Aparoopam:
      return 'Aparoopam';
    case JanyaRaaga.Baalahamsa:
      return 'Bālahamsa';
    case JanyaRaaga.Bahudaari:
      return 'Bahudāri';
    case JanyaRaaga.Bhoopaali:
      return 'Bhoopāli';
    case JanyaRaaga.Chaayalagakhamaas:
      return 'Chāyalagakhamās';
    case JanyaRaaga.Chaayataarangini:
      return 'Chāyatārangini';
    case JanyaRaaga.Chandrahasitham:
      return 'Chandrahasitham';
    case JanyaRaaga.Dasharatipriya:
      return 'Dasharatipriya';
    case JanyaRaaga.Dayaranjani:
      return 'Dayaranjani';
    case JanyaRaaga.Desh:
      return 'Desh';
    case JanyaRaaga.Deshaakshi:
      return 'Deshākshi';
    case JanyaRaaga.Deshkaar:
      return 'Deshkār';
    case JanyaRaaga.Dwaithachintaamani:
      return 'Dwaithachintāmani';
    case JanyaRaaga.Dwijaavanthi:
      return 'Dwijāvanthi';
    case JanyaRaaga.Eeshamanohari:
      return 'Eeshamanohari';
    case JanyaRaaga.Eeshaivaridhi:
      return 'Eeshaivaridhi';
    case JanyaRaaga.Gaandhaaralola:
      return 'Gāndhāralola';
    case JanyaRaaga.Gavathi:
      return 'Gavathi';
    case JanyaRaaga.Guhamanohari:
      return 'Guhamanohari';
    case JanyaRaaga.Guharanjani:
      return 'Guharanjani';
    case JanyaRaaga.Hamsaroopini:
      return 'Hamsaroopini';
    case JanyaRaaga.Harikedaaram:
      return 'Harikedāram';
    case JanyaRaaga.Harini:
      return 'Harini';
    case JanyaRaaga.Harithapriya:
      return 'Harithapriya';
    case JanyaRaaga.Hemasaaranga:
      return 'Hemasāranga';
    case JanyaRaaga.Jaijaivanthi:
      return 'Jaijaivanthi';
    case JanyaRaaga.Jaithshree:
      return 'Jaithshree';
    case JanyaRaaga.JanaSammodhini:
      return 'Jana Sammodhini';
    case JanyaRaaga.Jayaraama:
      return 'Jayarāma';
    case JanyaRaaga.Jhinjothi:
      return 'Jhinjothi';
    case JanyaRaaga.Jog:
      return 'Jog';
    case JanyaRaaga.Jujahuli:
      return 'Jujahuli';
    case JanyaRaaga.Kaambhoji:
      return 'Kāmbhoji';
    case JanyaRaaga.KaapiNaaraayani:
      return 'Kāpi Nārāyani';
    case JanyaRaaga.Kamaas:
      return 'Kamās';
    case JanyaRaaga.KarnaatakaBehaag:
      return 'Karnātaka Behāg';
    case JanyaRaaga.KarnaatakaDevagaandhaari:
      return 'Karnātaka Devagāndhāri';
    case JanyaRaaga.KarnaatakaKhamaas:
      return 'Karnātaka Khamās';
    case JanyaRaaga.Kedaaragowla:
      return 'Kedāragowla';
    case JanyaRaaga.Keshavapriyaa:
      return 'Keshavapriyā';
    case JanyaRaaga.Kokiladhwani:
      return 'Kokiladhwani';
    case JanyaRaaga.Kokilavaraali:
      return 'Kokilavarāli';
    case JanyaRaaga.Kunthalavaraali:
      return 'Kunthalavarāli';
    case JanyaRaaga.Maalavi:
      return 'Mālavi';
    case JanyaRaaga.Madhurakokila:
      return 'Madhurakokila';
    case JanyaRaaga.Mahathi:
      return 'Mahathi';
    case JanyaRaaga.Mahuri:
      return 'Mahuri';
    case JanyaRaaga.Manjupriya:
      return 'Manjupriya';
    case JanyaRaaga.Manoharam:
      return 'Manoharam';
    case JanyaRaaga.Mattakokila:
      return 'Mattakokila';
    case JanyaRaaga.Meghana:
      return 'Meghana';
    case JanyaRaaga.Mohanam:
      return 'Mohanam';
    case JanyaRaaga.Naadavalli:
      return 'Nādavalli';
    case JanyaRaaga.Naagaswaraavali:
      return 'Nāgaswarāvali';
    case JanyaRaaga.Naaraayanagowla:
      return 'Nārāyanagowla';
    case JanyaRaaga.Naaraayani:
      return 'Nārāyani';
    case JanyaRaaga.NaattaiKurinji:
      return 'Nāttai Kurinji';
    case JanyaRaaga.NaattaiNaaraayani:
      return 'Nāttai Nārāyani';
    case JanyaRaaga.Nandhkowns:
      return 'Nandhkowns';
    case JanyaRaaga.Narani:
      return 'Narani';
    case JanyaRaaga.NavarasaKalaanidhi:
      return 'Navarasa Kalānidhi';
    case JanyaRaaga.NavarasaKannada:
      return 'Navarasa Kannada';
    case JanyaRaaga.Neela:
      return 'Neela';
    case JanyaRaaga.Paarsi:
      return 'Pārsi';
    case JanyaRaaga.Parameshwarapriyaa:
      return 'Parameshwarapriyā';
    case JanyaRaaga.Pashupathipriyaa:
      return 'Pashupathipriyā';
    case JanyaRaaga.Poornakaambhoji:
      return 'Poornakāmbhoji';
    case JanyaRaaga.PrataapaNaattai:
      return 'Pratāpa Nāttai';
    case JanyaRaaga.Prataapavaraali:
      return 'Pratāpavarāli';
    case JanyaRaaga.Pravalajyoti:
      return 'Pravalajyoti';
    case JanyaRaaga.Raagapanjaramu:
      return 'Rāgapanjaramu';
    case JanyaRaaga.Raagavinodini:
      return 'Rāgavinodini';
    case JanyaRaaga.Raageshree:
      return 'Rāgeshree';
    case JanyaRaaga.RaviChandrikaa:
      return 'Ravi Chandrikā';
    case JanyaRaaga.Saavithri:
      return 'Sāvithri';
    case JanyaRaaga.Sahaana:
      return 'Sahāna';
    case JanyaRaaga.SaraswathiManohari:
      return 'Saraswathi Manohari';
    case JanyaRaaga.Sathvamanjari:
      return 'Sathvamanjari';
    case JanyaRaaga.Shakunthala:
      return 'Shakunthala';
    case JanyaRaaga.Shankaraharigowla:
      return 'Shankaraharigowla';
    case JanyaRaaga.Shenchukaambhoji:
      return 'Shenchukāmbhoji';
    case JanyaRaaga.Chenjurutti:
      return 'Chenjurutti';
    case JanyaRaaga.ShivaKaambhoji:
      return 'Shiva Kāmbhoji';
    case JanyaRaaga.Surutti:
      return 'Surutti';
    case JanyaRaaga.Shyaamaa:
      return 'Shyāmā';
    case JanyaRaaga.Simhavikrama:
      return 'Simhavikrama';
    case JanyaRaaga.SindhuKannada:
      return 'Sindhu Kannada';
    case JanyaRaaga.SindhuSurutti:
      return 'Sindhu Surutti';
    case JanyaRaaga.SuddhaKhamaas:
      return 'Suddha Khamās';
    case JanyaRaaga.SuddhaVaraali:
      return 'Suddha Varāli';
    case JanyaRaaga.Suddha:
      return 'Suddha';
    case JanyaRaaga.Suddhatarangini:
      return 'Suddhatarangini';
    case JanyaRaaga.Sumanapriyaa:
      return 'Sumanapriyā';
    case JanyaRaaga.Suposhini:
      return 'Suposhini';
    case JanyaRaaga.Suvarnakriyaa:
      return 'Suvarnakriyā';
    case JanyaRaaga.Swaraavali:
      return 'Swarāvali';
    case JanyaRaaga.Swaravedi:
      return 'Swaravedi';
    case JanyaRaaga.Tilakavathi:
      return 'Tilakavathi';
    case JanyaRaaga.Thilang:
      return 'Thilang';
    case JanyaRaaga.Umaabharanam:
      return 'Umābharanam';
    case JanyaRaaga.Vaishnavi:
      return 'Vaishnavi';
    case JanyaRaaga.Veenavadini:
      return 'Veenavadini';
    case JanyaRaaga.Vivardhani:
      return 'Vivardhani';
    case JanyaRaaga.YadukulaKaambhoji:
      return 'Yadukula Kāmbhoji';
  }
}
