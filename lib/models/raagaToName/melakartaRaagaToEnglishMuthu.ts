import { MelakartaRaaga } from '#lib/models/Raaga';

export function melakartaRaagaToEnglishMuthu(raaga: MelakartaRaaga) {
  switch (raaga) {
    // 1. Indu Chakra
    case MelakartaRaaga.Kanakangi:
      return 'Kanakāmbari';
    case MelakartaRaaga.Ratnangi:
      return 'Phenadhyuti';
    case MelakartaRaaga.Ganamurti:
      return 'Gānasāmavarāḷi';
    case MelakartaRaaga.Vanaspati:
      return 'Bhānumati';
    case MelakartaRaaga.Manavati:
      return 'Manōranjani';
    case MelakartaRaaga.Tanarupi:
      return 'Tanukeerti';

    // 2. Netra Chakra
    case MelakartaRaaga.Senavati:
      return 'Senāgrani';
    case MelakartaRaaga.Hanumatodi:
      return 'Janatōdi';
    case MelakartaRaaga.Dhenuka:
      return 'Dhunibinnashadjam';
    case MelakartaRaaga.Natakapriya:
      return 'Naţābharanam';
    case MelakartaRaaga.Kokilapriya:
      return 'Kokilāravam';
    case MelakartaRaaga.Rupavati:
      return 'Rūpavati';

    // 3. Agni Chakra
    case MelakartaRaaga.Gayakapriya:
      return 'Geyahejjujji';
    case MelakartaRaaga.Vakulabharanam:
      return 'Vātivasantabhairavi';
    case MelakartaRaaga.Mayamalavagowla:
      return 'Māyāmāḻavagauḻa';
    case MelakartaRaaga.Chakravakam:
      return 'Tōyavēgavāhini';
    case MelakartaRaaga.Suryakantam:
      return 'Chāyāvati';
    case MelakartaRaaga.Hatakambari:
      return 'Jayashuddhamālavi';

    // 4. Veda Chakra
    case MelakartaRaaga.Jhankaradhwani:
      return 'Jhankārabhramari';
    case MelakartaRaaga.Natabhairavi:
      return 'Nārīrītigowla';
    case MelakartaRaaga.Keeravani:
      return 'Kiraṇāvaḻi';
    case MelakartaRaaga.Kharaharapriya:
      return 'Kharaharapriya';
    case MelakartaRaaga.Gourimanohari:
      return 'Gourivelāvaḻi';
    case MelakartaRaaga.Varunapriya:
      return 'Viravasantam';

    // 5. Bana Chakra
    case MelakartaRaaga.Mararanjani:
      return 'Sharāvati';
    case MelakartaRaaga.Charukesi:
      return 'Tarangini';
    case MelakartaRaaga.Sarasangi:
      return 'Sowrasena';
    case MelakartaRaaga.Harikambhoji:
      return 'Harikedāragowla';
    case MelakartaRaaga.Dheerasankarabaranam:
      return 'Śankarābharaṇaṃ';
    case MelakartaRaaga.Naganandini:
      return 'Nagābharanam';

    // 6. Rutu Chakra
    case MelakartaRaaga.Yagapriya:
      return 'Kalāvati';
    case MelakartaRaaga.Ragavardhini:
      return 'Rāgachudāmaṇi';
    case MelakartaRaaga.Gangeyabhushani:
      return 'Gangātarangini';
    case MelakartaRaaga.Vagadheeswari:
      return 'Bhogachhāyānāţa';
    case MelakartaRaaga.Shulini:
      return 'Shailadesākshi';
    case MelakartaRaaga.Chalanata:
      return 'Chalanāta';

    // 7. Rishi Chakra
    case MelakartaRaaga.Salagam:
      return 'Sowgandini';
    case MelakartaRaaga.Jalarnavam:
      return 'Jaganmōhanam';
    case MelakartaRaaga.Jhalavarali:
      return 'Dhālivarāḻi';
    case MelakartaRaaga.Navaneetam:
      return 'Nabhōmaṇi';
    case MelakartaRaaga.Pavani:
      return 'Kumbhini';
    case MelakartaRaaga.Raghupriya:
      return 'Ravikriya';

    // 8. Vasu Chakra
    case MelakartaRaaga.Gavambhodi:
      return 'Geervāṇi';
    case MelakartaRaaga.Bhavapriya:
      return 'Bhavāni';
    case MelakartaRaaga.Shubhapantuvarali:
      return 'Shivapantuvarāḻi';
    case MelakartaRaaga.Shadvidamargini:
      return 'Stavarājam';
    case MelakartaRaaga.Suvarnangi:
      return 'Souveeram';
    case MelakartaRaaga.Divyamani:
      return 'Jeevantika';

    // 9. Brahma Chakra
    case MelakartaRaaga.Dhavalambari:
      return 'Dhavaḻāngam';
    case MelakartaRaaga.Naamanarayani:
      return 'Nāmadēshi';
    case MelakartaRaaga.Kamavardhini:
      return 'Kāshirāmakriya';
    case MelakartaRaaga.Ramapriya:
      return 'Ramāmanōhari';
    case MelakartaRaaga.Gamanashrama:
      return 'Gamakakriya';
    case MelakartaRaaga.Vishwambari:
      return 'Vamshavati';

    // 10. Disi Chakra
    case MelakartaRaaga.Shaamalangi:
      return 'Shāmaḻam';
    case MelakartaRaaga.Shanmukhapriya:
      return 'Chāmaram';
    case MelakartaRaaga.Simhendramadhyamam:
      return 'Sumadyuti';
    case MelakartaRaaga.Hemavati:
      return 'Simhāravam';
    case MelakartaRaaga.Dharmavati:
      return 'Dhaamavati';
    case MelakartaRaaga.Neetimati:
      return 'Nishādham';

    // 11. Rudra Chakra
    case MelakartaRaaga.Kantamani:
      return 'Kuntalam';
    case MelakartaRaaga.Rishabhapriya:
      return 'Ratipriya';
    case MelakartaRaaga.Latangi:
      return 'Geetapriya';
    case MelakartaRaaga.Vachaspati:
      return 'Bhushāvati';
    case MelakartaRaaga.Mechakalyani:
      return 'Kalyāni';
    case MelakartaRaaga.Chitrambari:
      return 'Chaturangini';

    // 12. Aditya Chakra
    case MelakartaRaaga.Sucharitra:
      return 'Santāna Manjari';
    case MelakartaRaaga.JyotiSwarupini:
      return 'Jyōti';
    case MelakartaRaaga.Dhatuvardani:
      return 'Dhautapanchamam';
    case MelakartaRaaga.Naasikabhushini:
      return 'Nāsāmaṇi';
    case MelakartaRaaga.Koosalam:
      return 'Kusumākaram';
    case MelakartaRaaga.Rasikapriya:
      return 'Rasamanjari';
  }
}
