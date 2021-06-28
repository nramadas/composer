import { MelakartaRaaga } from '#lib/models/Raaga';
import { Shruti } from '#lib/models/Shruti';

export function melakartaRaagaToShruti(raaga: MelakartaRaaga) {
  switch (raaga) {
    // 1. Indu Chakra
    case MelakartaRaaga.Kanakangi:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G1,
        Shruti.M1,
        Shruti.P,
        Shruti.D1,
        Shruti.N1,
      ];
    case MelakartaRaaga.Ratnangi:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G1,
        Shruti.M1,
        Shruti.P,
        Shruti.D1,
        Shruti.N2,
      ];
    case MelakartaRaaga.Ganamurti:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G1,
        Shruti.M1,
        Shruti.P,
        Shruti.D1,
        Shruti.N3,
      ];
    case MelakartaRaaga.Vanaspati:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G1,
        Shruti.M1,
        Shruti.P,
        Shruti.D2,
        Shruti.N2,
      ];
    case MelakartaRaaga.Manavati:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G1,
        Shruti.M1,
        Shruti.P,
        Shruti.D2,
        Shruti.N3,
      ];
    case MelakartaRaaga.Tanarupi:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G1,
        Shruti.M1,
        Shruti.P,
        Shruti.D3,
        Shruti.N3,
      ];

    // 2. Netra Chakra
    case MelakartaRaaga.Senavati:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G2,
        Shruti.M1,
        Shruti.P,
        Shruti.D1,
        Shruti.N1,
      ];
    case MelakartaRaaga.Hanumatodi:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G2,
        Shruti.M1,
        Shruti.P,
        Shruti.D1,
        Shruti.N2,
      ];
    case MelakartaRaaga.Dhenuka:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G2,
        Shruti.M1,
        Shruti.P,
        Shruti.D1,
        Shruti.N3,
      ];
    case MelakartaRaaga.Natakapriya:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G2,
        Shruti.M1,
        Shruti.P,
        Shruti.D2,
        Shruti.N2,
      ];
    case MelakartaRaaga.Kokilapriya:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G2,
        Shruti.M1,
        Shruti.P,
        Shruti.D2,
        Shruti.N3,
      ];
    case MelakartaRaaga.Rupavati:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G2,
        Shruti.M1,
        Shruti.P,
        Shruti.D3,
        Shruti.N3,
      ];

    // 3. Agni Chakra
    case MelakartaRaaga.Gayakapriya:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G3,
        Shruti.M1,
        Shruti.P,
        Shruti.D1,
        Shruti.N1,
      ];
    case MelakartaRaaga.Vakulabharanam:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G3,
        Shruti.M1,
        Shruti.P,
        Shruti.D1,
        Shruti.N2,
      ];
    case MelakartaRaaga.Mayamalavagowla:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G3,
        Shruti.M1,
        Shruti.P,
        Shruti.D1,
        Shruti.N3,
      ];
    case MelakartaRaaga.Chakravakam:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G3,
        Shruti.M1,
        Shruti.P,
        Shruti.D2,
        Shruti.N2,
      ];
    case MelakartaRaaga.Suryakantam:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G3,
        Shruti.M1,
        Shruti.P,
        Shruti.D2,
        Shruti.N3,
      ];
    case MelakartaRaaga.Hatakambari:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G3,
        Shruti.M1,
        Shruti.P,
        Shruti.D3,
        Shruti.N3,
      ];

    // 4. Veda Chakra
    case MelakartaRaaga.Jhankaradhwani:
      return [
        Shruti.S,
        Shruti.R2,
        Shruti.G2,
        Shruti.M1,
        Shruti.P,
        Shruti.D1,
        Shruti.N1,
      ];
    case MelakartaRaaga.Natabhairavi:
      return [
        Shruti.S,
        Shruti.R2,
        Shruti.G2,
        Shruti.M1,
        Shruti.P,
        Shruti.D1,
        Shruti.N2,
      ];
    case MelakartaRaaga.Keeravani:
      return [
        Shruti.S,
        Shruti.R2,
        Shruti.G2,
        Shruti.M1,
        Shruti.P,
        Shruti.D1,
        Shruti.N3,
      ];
    case MelakartaRaaga.Kharaharapriya:
      return [
        Shruti.S,
        Shruti.R2,
        Shruti.G2,
        Shruti.M1,
        Shruti.P,
        Shruti.D2,
        Shruti.N2,
      ];
    case MelakartaRaaga.Gourimanohari:
      return [
        Shruti.S,
        Shruti.R2,
        Shruti.G2,
        Shruti.M1,
        Shruti.P,
        Shruti.D2,
        Shruti.N3,
      ];
    case MelakartaRaaga.Varunapriya:
      return [
        Shruti.S,
        Shruti.R2,
        Shruti.G2,
        Shruti.M1,
        Shruti.P,
        Shruti.D3,
        Shruti.N3,
      ];

    // 5. Bana Chakra
    case MelakartaRaaga.Mararanjani:
      return [
        Shruti.S,
        Shruti.R2,
        Shruti.G3,
        Shruti.M1,
        Shruti.P,
        Shruti.D1,
        Shruti.N1,
      ];
    case MelakartaRaaga.Charukesi:
      return [
        Shruti.S,
        Shruti.R2,
        Shruti.G3,
        Shruti.M1,
        Shruti.P,
        Shruti.D1,
        Shruti.N2,
      ];
    case MelakartaRaaga.Sarasangi:
      return [
        Shruti.S,
        Shruti.R2,
        Shruti.G3,
        Shruti.M1,
        Shruti.P,
        Shruti.D1,
        Shruti.N3,
      ];
    case MelakartaRaaga.Harikambhoji:
      return [
        Shruti.S,
        Shruti.R2,
        Shruti.G3,
        Shruti.M1,
        Shruti.P,
        Shruti.D2,
        Shruti.N2,
      ];
    case MelakartaRaaga.Dheerasankarabaranam:
      return [
        Shruti.S,
        Shruti.R2,
        Shruti.G3,
        Shruti.M1,
        Shruti.P,
        Shruti.D2,
        Shruti.N3,
      ];
    case MelakartaRaaga.Naganandini:
      return [
        Shruti.S,
        Shruti.R2,
        Shruti.G3,
        Shruti.M1,
        Shruti.P,
        Shruti.D3,
        Shruti.N3,
      ];

    // 6. Rutu Chakra
    case MelakartaRaaga.Yagapriya:
      return [
        Shruti.S,
        Shruti.R3,
        Shruti.G3,
        Shruti.M1,
        Shruti.P,
        Shruti.D1,
        Shruti.N1,
      ];
    case MelakartaRaaga.Ragavardhini:
      return [
        Shruti.S,
        Shruti.R3,
        Shruti.G3,
        Shruti.M1,
        Shruti.P,
        Shruti.D1,
        Shruti.N2,
      ];
    case MelakartaRaaga.Gangeyabhushani:
      return [
        Shruti.S,
        Shruti.R3,
        Shruti.G3,
        Shruti.M1,
        Shruti.P,
        Shruti.D1,
        Shruti.N3,
      ];
    case MelakartaRaaga.Vagadheeswari:
      return [
        Shruti.S,
        Shruti.R3,
        Shruti.G3,
        Shruti.M1,
        Shruti.P,
        Shruti.D2,
        Shruti.N2,
      ];
    case MelakartaRaaga.Shulini:
      return [
        Shruti.S,
        Shruti.R3,
        Shruti.G3,
        Shruti.M1,
        Shruti.P,
        Shruti.D2,
        Shruti.N3,
      ];
    case MelakartaRaaga.Chalanata:
      return [
        Shruti.S,
        Shruti.R3,
        Shruti.G3,
        Shruti.M1,
        Shruti.P,
        Shruti.D3,
        Shruti.N3,
      ];

    // 7. Rishi Chakra
    case MelakartaRaaga.Salagam:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G1,
        Shruti.M2,
        Shruti.P,
        Shruti.D1,
        Shruti.N1,
      ];
    case MelakartaRaaga.Jalarnavam:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G1,
        Shruti.M2,
        Shruti.P,
        Shruti.D1,
        Shruti.N2,
      ];
    case MelakartaRaaga.Jhalavarali:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G1,
        Shruti.M2,
        Shruti.P,
        Shruti.D1,
        Shruti.N3,
      ];
    case MelakartaRaaga.Navaneetam:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G1,
        Shruti.M2,
        Shruti.P,
        Shruti.D2,
        Shruti.N2,
      ];
    case MelakartaRaaga.Pavani:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G1,
        Shruti.M2,
        Shruti.P,
        Shruti.D2,
        Shruti.N3,
      ];
    case MelakartaRaaga.Raghupriya:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G1,
        Shruti.M2,
        Shruti.P,
        Shruti.D3,
        Shruti.N3,
      ];

    // 8. Vasu Chakra
    case MelakartaRaaga.Gavambhodi:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G2,
        Shruti.M2,
        Shruti.P,
        Shruti.D1,
        Shruti.N1,
      ];
    case MelakartaRaaga.Bhavapriya:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G2,
        Shruti.M2,
        Shruti.P,
        Shruti.D1,
        Shruti.N2,
      ];
    case MelakartaRaaga.Shubhapantuvarali:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G2,
        Shruti.M2,
        Shruti.P,
        Shruti.D1,
        Shruti.N3,
      ];
    case MelakartaRaaga.Shadvidamargini:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G2,
        Shruti.M2,
        Shruti.P,
        Shruti.D2,
        Shruti.N2,
      ];
    case MelakartaRaaga.Suvarnangi:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G2,
        Shruti.M2,
        Shruti.P,
        Shruti.D2,
        Shruti.N3,
      ];
    case MelakartaRaaga.Divyamani:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G2,
        Shruti.M2,
        Shruti.P,
        Shruti.D3,
        Shruti.N3,
      ];

    // 9. Brahma Chakra
    case MelakartaRaaga.Dhavalambari:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G3,
        Shruti.M2,
        Shruti.P,
        Shruti.D1,
        Shruti.N1,
      ];
    case MelakartaRaaga.Naamanarayani:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G3,
        Shruti.M2,
        Shruti.P,
        Shruti.D1,
        Shruti.N2,
      ];
    case MelakartaRaaga.Kamavardhini:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G3,
        Shruti.M2,
        Shruti.P,
        Shruti.D1,
        Shruti.N3,
      ];
    case MelakartaRaaga.Ramapriya:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G3,
        Shruti.M2,
        Shruti.P,
        Shruti.D2,
        Shruti.N2,
      ];
    case MelakartaRaaga.Gamanashrama:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G3,
        Shruti.M2,
        Shruti.P,
        Shruti.D2,
        Shruti.N3,
      ];
    case MelakartaRaaga.Vishwambari:
      return [
        Shruti.S,
        Shruti.R1,
        Shruti.G3,
        Shruti.M2,
        Shruti.P,
        Shruti.D3,
        Shruti.N3,
      ];

    // 10. Disi Chakra
    case MelakartaRaaga.Shaamalangi:
      return [
        Shruti.S,
        Shruti.R2,
        Shruti.G2,
        Shruti.M2,
        Shruti.P,
        Shruti.D1,
        Shruti.N1,
      ];
    case MelakartaRaaga.Shanmukhapriya:
      return [
        Shruti.S,
        Shruti.R2,
        Shruti.G2,
        Shruti.M2,
        Shruti.P,
        Shruti.D1,
        Shruti.N2,
      ];
    case MelakartaRaaga.Simhendramadhyamam:
      return [
        Shruti.S,
        Shruti.R2,
        Shruti.G2,
        Shruti.M2,
        Shruti.P,
        Shruti.D1,
        Shruti.N3,
      ];
    case MelakartaRaaga.Hemavati:
      return [
        Shruti.S,
        Shruti.R2,
        Shruti.G2,
        Shruti.M2,
        Shruti.P,
        Shruti.D2,
        Shruti.N2,
      ];
    case MelakartaRaaga.Dharmavati:
      return [
        Shruti.S,
        Shruti.R2,
        Shruti.G2,
        Shruti.M2,
        Shruti.P,
        Shruti.D2,
        Shruti.N3,
      ];
    case MelakartaRaaga.Neetimati:
      return [
        Shruti.S,
        Shruti.R2,
        Shruti.G2,
        Shruti.M2,
        Shruti.P,
        Shruti.D3,
        Shruti.N3,
      ];

    // 11. Rudra Chakra
    case MelakartaRaaga.Kantamani:
      return [
        Shruti.S,
        Shruti.R2,
        Shruti.G3,
        Shruti.M2,
        Shruti.P,
        Shruti.D1,
        Shruti.N1,
      ];
    case MelakartaRaaga.Rishabhapriya:
      return [
        Shruti.S,
        Shruti.R2,
        Shruti.G3,
        Shruti.M2,
        Shruti.P,
        Shruti.D1,
        Shruti.N2,
      ];
    case MelakartaRaaga.Latangi:
      return [
        Shruti.S,
        Shruti.R2,
        Shruti.G3,
        Shruti.M2,
        Shruti.P,
        Shruti.D1,
        Shruti.N3,
      ];
    case MelakartaRaaga.Vachaspati:
      return [
        Shruti.S,
        Shruti.R2,
        Shruti.G3,
        Shruti.M2,
        Shruti.P,
        Shruti.D2,
        Shruti.N2,
      ];
    case MelakartaRaaga.Mechakalyani:
      return [
        Shruti.S,
        Shruti.R2,
        Shruti.G3,
        Shruti.M2,
        Shruti.P,
        Shruti.D2,
        Shruti.N3,
      ];
    case MelakartaRaaga.Chitrambari:
      return [
        Shruti.S,
        Shruti.R2,
        Shruti.G3,
        Shruti.M2,
        Shruti.P,
        Shruti.D3,
        Shruti.N3,
      ];

    // 12. Aditya Chakra
    case MelakartaRaaga.Sucharitra:
      return [
        Shruti.S,
        Shruti.R3,
        Shruti.G3,
        Shruti.M2,
        Shruti.P,
        Shruti.D1,
        Shruti.N1,
      ];
    case MelakartaRaaga.JyotiSwarupini:
      return [
        Shruti.S,
        Shruti.R3,
        Shruti.G3,
        Shruti.M2,
        Shruti.P,
        Shruti.D1,
        Shruti.N2,
      ];
    case MelakartaRaaga.Dhatuvardani:
      return [
        Shruti.S,
        Shruti.R3,
        Shruti.G3,
        Shruti.M2,
        Shruti.P,
        Shruti.D1,
        Shruti.N3,
      ];
    case MelakartaRaaga.Naasikabhushini:
      return [
        Shruti.S,
        Shruti.R3,
        Shruti.G3,
        Shruti.M2,
        Shruti.P,
        Shruti.D2,
        Shruti.N2,
      ];
    case MelakartaRaaga.Koosalam:
      return [
        Shruti.S,
        Shruti.R3,
        Shruti.G3,
        Shruti.M2,
        Shruti.P,
        Shruti.D2,
        Shruti.N3,
      ];
    case MelakartaRaaga.Rasikapriya:
      return [
        Shruti.S,
        Shruti.R3,
        Shruti.G3,
        Shruti.M2,
        Shruti.P,
        Shruti.D3,
        Shruti.N3,
      ];
  }
}
