import { MelakartaRaaga } from '#lib/models/Raaga';

export function melakartaRaagaToEnglish(raaga: MelakartaRaaga) {
  switch (raaga) {
    // 1. Indu Chakra
    case MelakartaRaaga.Kanakangi:
      return 'Kanakāngi';
    case MelakartaRaaga.Ratnangi:
      return 'Ratnāngi';
    case MelakartaRaaga.Ganamurti:
      return 'Gānamūrti';
    case MelakartaRaaga.Vanaspati:
      return 'Vanaspati';
    case MelakartaRaaga.Manavati:
      return 'Mānavati';
    case MelakartaRaaga.Tanarupi:
      return 'Tānarūpi';

    // 2. Netra Chakra
    case MelakartaRaaga.Senavati:
      return 'Sēnāvati';
    case MelakartaRaaga.Hanumatodi:
      return 'Hanumatōdi';
    case MelakartaRaaga.Dhenuka:
      return 'Dhēnukā';
    case MelakartaRaaga.Natakapriya:
      return 'Nāţakapriya';
    case MelakartaRaaga.Kokilapriya:
      return 'Kokilapriya';
    case MelakartaRaaga.Rupavati:
      return 'Rūpavati';

    // 3. Agni Chakra
    case MelakartaRaaga.Gayakapriya:
      return 'Gāyakapriya';
    case MelakartaRaaga.Vakulabharanam:
      return 'Vakuḷābharaṇam';
    case MelakartaRaaga.Mayamalavagowla:
      return 'Māyāmāḻavagauḻa';
    case MelakartaRaaga.Chakravakam:
      return 'Chakravākam';
    case MelakartaRaaga.Suryakantam:
      return 'Sūryakāntam';
    case MelakartaRaaga.Hatakambari:
      return 'Hātakāmbari';

    // 4. Veda Chakra
    case MelakartaRaaga.Jhankaradhwani:
      return 'Jhankāradhvani';
    case MelakartaRaaga.Natabhairavi:
      return 'Naṭabhairavi';
    case MelakartaRaaga.Keeravani:
      return 'Keeravāṇi';
    case MelakartaRaaga.Kharaharapriya:
      return 'Kharaharapriya';
    case MelakartaRaaga.Gourimanohari:
      return 'Gaurimanohari';
    case MelakartaRaaga.Varunapriya:
      return 'Varuṇapriya';

    // 5. Bana Chakra
    case MelakartaRaaga.Mararanjani:
      return 'Māraranjani';
    case MelakartaRaaga.Charukesi:
      return 'Chārukēś‌i';
    case MelakartaRaaga.Sarasangi:
      return 'Sarasāngi';
    case MelakartaRaaga.Harikambhoji:
      return 'Harikāmbhōji';
    case MelakartaRaaga.Dheerasankarabaranam:
      return 'Śankarābharaṇaṃ';
    case MelakartaRaaga.Naganandini:
      return 'Naganandini';

    // 6. Rutu Chakra
    case MelakartaRaaga.Yagapriya:
      return 'Yāgapriya';
    case MelakartaRaaga.Ragavardhini:
      return 'Rāgavardini';
    case MelakartaRaaga.Gangeyabhushani:
      return 'Gāngaeyabhūshani';
    case MelakartaRaaga.Vagadheeswari:
      return 'Vāgadheeśwari';
    case MelakartaRaaga.Shulini:
      return 'Shūlini';
    case MelakartaRaaga.Chalanata:
      return 'Chalanāta';

    // 7. Rishi Chakra
    case MelakartaRaaga.Salagam:
      return 'Sālagam';
    case MelakartaRaaga.Jalarnavam:
      return 'Jalārṇavam';
    case MelakartaRaaga.Jhalavarali:
      return 'Jhālavarāḻi';
    case MelakartaRaaga.Navaneetam:
      return 'Navanītam';
    case MelakartaRaaga.Pavani:
      return 'Pāvani';
    case MelakartaRaaga.Raghupriya:
      return 'Raghupriya';

    // 8. Vasu Chakra
    case MelakartaRaaga.Gavambhodi:
      return 'Gavāmbōdhi';
    case MelakartaRaaga.Bhavapriya:
      return 'Bhavapriya';
    case MelakartaRaaga.Shubhapantuvarali:
      return 'Śubhapantuvarāḻi';
    case MelakartaRaaga.Shadvidamargini:
      return 'Shaḍvidamārgini';
    case MelakartaRaaga.Suvarnangi:
      return 'Suvarṇāngi';
    case MelakartaRaaga.Divyamani:
      return 'Divyamaṇi';

    // 9. Brahma Chakra
    case MelakartaRaaga.Dhavalambari:
      return 'Dhavaḻāmbari';
    case MelakartaRaaga.Naamanarayani:
      return 'Nāmanārāyaṇi';
    case MelakartaRaaga.Kamavardhini:
      return 'Kāmavardhini';
    case MelakartaRaaga.Ramapriya:
      return 'Rāmapriya';
    case MelakartaRaaga.Gamanashrama:
      return 'Gamanāshrama';
    case MelakartaRaaga.Vishwambari:
      return 'Vishwambari';

    // 10. Disi Chakra
    case MelakartaRaaga.Shaamalangi:
      return 'Shāmaḻāngi';
    case MelakartaRaaga.Shanmukhapriya:
      return 'Shanmukhapriya';
    case MelakartaRaaga.Simhendramadhyamam:
      return 'Simhendramadhyamam';
    case MelakartaRaaga.Hemavati:
      return 'Hēmavati';
    case MelakartaRaaga.Dharmavati:
      return 'Dharmavati';
    case MelakartaRaaga.Neetimati:
      return 'Neetimati';

    // 11. Rudra Chakra
    case MelakartaRaaga.Kantamani:
      return 'Kāntāmaṇi';
    case MelakartaRaaga.Rishabhapriya:
      return 'Rishabhapriya';
    case MelakartaRaaga.Latangi:
      return 'Latāngi';
    case MelakartaRaaga.Vachaspati:
      return 'Vāchaspati';
    case MelakartaRaaga.Mechakalyani:
      return 'Kalyāni';
    case MelakartaRaaga.Chitrambari:
      return 'Chitrāmbari';

    // 12. Aditya Chakra
    case MelakartaRaaga.Sucharitra:
      return 'Sucharitra';
    case MelakartaRaaga.JyotiSwarupini:
      return 'Jyōti Swarūpini';
    case MelakartaRaaga.Dhatuvardani:
      return 'Dhātuvardhani';
    case MelakartaRaaga.Naasikabhushini:
      return 'Nāsikābhūshaṇi';
    case MelakartaRaaga.Koosalam:
      return 'Kōsalam';
    case MelakartaRaaga.Rasikapriya:
      return 'Rasikapriya';
  }
}
