import { JanyaRaaga } from '#lib/models/Raaga';
import { Shruti } from '#lib/models/Shruti';

export function JanyaRaagaToShruti(raaga: JanyaRaaga) {
  switch (raaga) {
    // From 'Kanakangi'
    case JanyaRaaga.Kanakaambari:
      return {
        aa: [Shruti.S, Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [
          Shruti.N1,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.G1,
          Shruti.R1,
          Shruti.S,
        ],
      };
    case JanyaRaaga.Kanakatodi:
      return {
        aa: [Shruti.S, Shruti.R1, Shruti.G1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.N1, Shruti.D1, Shruti.P, Shruti.M1, Shruti.R1, Shruti.S],
      };
    case JanyaRaaga.Maadhavapriyaa:
      return {
        aa: [Shruti.S, Shruti.R1, Shruti.G1, Shruti.P, Shruti.D1, Shruti.N1],
        av: [Shruti.N1, Shruti.D1, Shruti.P, Shruti.G1, Shruti.R1, Shruti.S],
      };
    case JanyaRaaga.KarnaatakaShuddhaSaaveri:
      return {
        aa: [Shruti.S, Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.R1, Shruti.S],
      };
    case JanyaRaaga.Latantapriya:
      return {
        aa: [Shruti.S, Shruti.R1, Shruti.G1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.R1, Shruti.S],
      };
    case JanyaRaaga.Lavangi:
      return {
        aa: [Shruti.S, Shruti.R1, Shruti.M1, Shruti.D1],
        av: [Shruti.D1, Shruti.M1, Shruti.R1, Shruti.S],
      };
    case JanyaRaaga.Megha:
      return {
        aa: [
          Shruti.S,
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
        aa: [Shruti.S, Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.R1,
          Shruti.M1,
          Shruti.R1,
          Shruti.S,
        ],
      };
    case JanyaRaaga.Sarvashree:
      return {
        aa: [Shruti.S, Shruti.M1, Shruti.P],
        av: [Shruti.P, Shruti.M1, Shruti.S],
      };
    case JanyaRaaga.SuddhaMukhaari:
      return {
        aa: [Shruti.S, Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [
          Shruti.N1,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.G1,
          Shruti.R1,
          Shruti.S,
        ],
      };
    case JanyaRaaga.Tatillatika:
      return {
        aa: [Shruti.S, Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.R1, Shruti.S],
      };
    case JanyaRaaga.Vaageeshwari:
      return {
        aa: [Shruti.S, Shruti.R1, Shruti.G1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.M1, Shruti.P, Shruti.G1, Shruti.R1, Shruti.S],
      };

    // From 'Rathnāngi'
    case JanyaRaaga.Phenadhyuti:
      return {
        aa: [
          Shruti.S,
          Shruti.R1,
          Shruti.M1,
          Shruti.P,
          Shruti.D1,
          Shruti.P,
          Shruti.N2,
        ],
        av: [
          Shruti.N2,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.G1,
          Shruti.R1,
          Shruti.S,
        ],
      };
    case JanyaRaaga.Ganamukhaari:
      return {
        aa: [Shruti.S, Shruti.R1, Shruti.M1, Shruti.D1],
        av: [Shruti.N2, Shruti.D1, Shruti.M1, Shruti.R1, Shruti.S],
      };
    case JanyaRaaga.Ratnavaraali:
      return {
        aa: [Shruti.S, Shruti.R1, Shruti.M1, Shruti.P, Shruti.N2, Shruti.D1],
        av: [
          Shruti.N2,
          Shruti.P,
          Shruti.M1,
          Shruti.R1,
          Shruti.G1,
          Shruti.R1,
          Shruti.S,
        ],
      };
    case JanyaRaaga.Revati:
      return {
        aa: [Shruti.S, Shruti.R1, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.R1, Shruti.S],
      };
    case JanyaRaaga.Shreemani:
      return {
        aa: [Shruti.S, Shruti.R1, Shruti.G1, Shruti.P, Shruti.D1],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.G1, Shruti.R1, Shruti.S],
      };
    case JanyaRaaga.Shreemati:
      return {
        aa: [Shruti.S, Shruti.R1, Shruti.G1, Shruti.P, Shruti.D1],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.G1, Shruti.R1, Shruti.S],
      };
    case JanyaRaaga.Svadhya:
      return {
        aa: [Shruti.S, Shruti.R1, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.R1, Shruti.S],
      };
  }
}
