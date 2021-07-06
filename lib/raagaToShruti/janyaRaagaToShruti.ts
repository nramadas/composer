import { JanyaRaaga } from '#lib/models/Raaga';
import { Shruti } from '#lib/models/Shruti';

export function janyaRaagaToShruti(raaga: JanyaRaaga) {
  switch (raaga) {
    // From 'Kanakangi'
    case JanyaRaaga.Kanakaambari:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.N1, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G1, Shruti.R1],
      };
    case JanyaRaaga.Kanakatodi:
      return {
        aa: [Shruti.R1, Shruti.G1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.N1, Shruti.D1, Shruti.P, Shruti.M1, Shruti.R1, Shruti.S],
      };
    case JanyaRaaga.Maadhavapriyaa:
      return {
        aa: [Shruti.R1, Shruti.G1, Shruti.P, Shruti.D1, Shruti.N1],
        av: [Shruti.N1, Shruti.D1, Shruti.P, Shruti.G1, Shruti.R1, Shruti.S],
      };
    case JanyaRaaga.KarnaatakaShuddhaSaaveri:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.R1, Shruti.S],
      };
    case JanyaRaaga.Latantapriya:
      return {
        aa: [Shruti.R1, Shruti.G1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.R1, Shruti.S],
      };
    case JanyaRaaga.Lavangi:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.D1],
        av: [Shruti.D1, Shruti.M1, Shruti.R1, Shruti.S],
      };
    case JanyaRaaga.Megha:
      return {
        aa: [
          Shruti.R1,
          Shruti.M1,
          Shruti.P,
          Shruti.D1,
          Shruti.N1,
          Shruti.D1,
          Shruti.P,
        ],
        av: [Shruti.N1, Shruti.D1, Shruti.P, Shruti.M1, Shruti.R1, Shruti.S],
      };
    case JanyaRaaga.Rishabhavilaasa:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.R1, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Sarvashree:
      return {
        aa: [Shruti.M1, Shruti.P],
        av: [Shruti.P, Shruti.M1, Shruti.S],
      };
    case JanyaRaaga.SuddhaMukhaari:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.N1, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G1, Shruti.R1],
      };
    case JanyaRaaga.Tatillatika:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.R1, Shruti.S],
      };
    case JanyaRaaga.Vaageeshwari:
      return {
        aa: [Shruti.R1, Shruti.G1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.M1, Shruti.P, Shruti.G1, Shruti.R1, Shruti.S],
      };

    // From 'Rathnāngi'
    case JanyaRaaga.Phenadhyuti:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G1, Shruti.R1],
      };
    case JanyaRaaga.Ganamukhaari:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.D1],
        av: [Shruti.N2, Shruti.D1, Shruti.M1, Shruti.R1, Shruti.S],
      };
    case JanyaRaaga.Ratnavaraali:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.N2, Shruti.D1],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.R1, Shruti.G1, Shruti.R1],
      };
    case JanyaRaaga.Revati:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.R1, Shruti.S],
      };
    case JanyaRaaga.Shreemani:
      return {
        aa: [Shruti.R1, Shruti.G1, Shruti.P, Shruti.D1],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.G1, Shruti.R1, Shruti.S],
      };
    case JanyaRaaga.Shreemati:
      return {
        aa: [Shruti.R1, Shruti.G1, Shruti.P, Shruti.D1],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.G1, Shruti.R1, Shruti.S],
      };
    case JanyaRaaga.Svadhya:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.R1, Shruti.S],
      };

    // From Gānamoorti
    case JanyaRaaga.Gaanasaamavaraali:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G1, Shruti.R1],
      };
    case JanyaRaaga.Bhinnapanchamam:
      return {
        aa: [Shruti.R1, Shruti.G1, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G1, Shruti.R1],
      };
    case JanyaRaaga.Naadharanjani:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.M1, Shruti.G1, Shruti.R1],
      };
    case JanyaRaaga.Poorvavaraali:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G1, Shruti.R1],
      };
    case JanyaRaaga.Saamavaraali:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N3],
        av: [
          Shruti.N3,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.G1,
          Shruti.R1,
          Shruti.G1,
        ],
      };
  }
}
