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
        av: [Shruti.N1, Shruti.D1, Shruti.P, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Maadhavapriyaa:
      return {
        aa: [Shruti.R1, Shruti.G1, Shruti.P, Shruti.D1, Shruti.N1],
        av: [Shruti.N1, Shruti.D1, Shruti.P, Shruti.G1, Shruti.R1],
      };
    case JanyaRaaga.KarnaatakaShuddhaSaaveri:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Latantapriya:
      return {
        aa: [Shruti.R1, Shruti.G1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Lavangi:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.D1],
        av: [Shruti.D1, Shruti.M1, Shruti.R1],
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
        av: [Shruti.N1, Shruti.D1, Shruti.P, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Rishabhavilaasa:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.R1, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Sarvashree:
      return {
        aa: [Shruti.M1, Shruti.P],
        av: [Shruti.P, Shruti.M1],
      };
    case JanyaRaaga.SuddhaMukhaari:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.N1, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G1, Shruti.R1],
      };
    case JanyaRaaga.Tatillatika:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Vaageeshwari:
      return {
        aa: [Shruti.R1, Shruti.G1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.M1, Shruti.P, Shruti.G1, Shruti.R1],
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
        av: [Shruti.N2, Shruti.D1, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Ratnavaraali:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.N2, Shruti.D1],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.R1, Shruti.G1, Shruti.R1],
      };
    case JanyaRaaga.Revati:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Shreemani:
      return {
        aa: [Shruti.R1, Shruti.G1, Shruti.P, Shruti.D1],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.G1, Shruti.R1],
      };
    case JanyaRaaga.Shreemati:
      return {
        aa: [Shruti.R1, Shruti.G1, Shruti.P, Shruti.D1],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.G1, Shruti.R1],
      };
    case JanyaRaaga.Svadhya:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.R1],
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

    // From Vanaspati
    case JanyaRaaga.Bhaanumati: ///
      return {
        aa: [Shruti.N2, Shruti.S, Shruti.M2, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M2, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Rasaali:
      return {
        aa: [Shruti.R1, Shruti.M2, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.D2, Shruti.P, Shruti.M2, Shruti.R1],
      };
    case JanyaRaaga.Vanaavali:
      return {
        aa: [Shruti.R1, Shruti.M2, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.D2, Shruti.P, Shruti.M2, Shruti.R1],
      };
    case JanyaRaaga.Vittalapriya:
      return {
        aa: [Shruti.R1, Shruti.M2, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.M2, Shruti.R1],
      };

    // From Mānavati
    case JanyaRaaga.Manoranjani:
      return {
        aa: [Shruti.R1, Shruti.M2, Shruti.P, Shruti.D2, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M2, Shruti.G1, Shruti.R1],
      };
    case JanyaRaaga.Ghanashyaamalaa:
      return {
        aa: [Shruti.G1, Shruti.M2, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.N3, Shruti.P, Shruti.M2, Shruti.G1, Shruti.R1],
      };
    case JanyaRaaga.Kunjari:
      return {
        aa: [Shruti.R1, Shruti.M2, Shruti.P, Shruti.D2, Shruti.P],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M2, Shruti.G1, Shruti.R1],
      };

    // From Tānaroopi
    case JanyaRaaga.Tanukeerti:
      return {
        aa: [Shruti.R1, Shruti.M2, Shruti.P, Shruti.N3],
        av: [
          Shruti.N3,
          Shruti.D3,
          Shruti.N3,
          Shruti.P,
          Shruti.M2,
          Shruti.G1,
          Shruti.M2,
          Shruti.R1,
        ],
      };

    // From Senāvati
    case JanyaRaaga.Senaagrani:
      return {
        aa: [
          Shruti.R1,
          Shruti.G2,
          Shruti.R1,
          Shruti.M2,
          Shruti.G2,
          Shruti.M2,
          Shruti.P,
          Shruti.N1,
          Shruti.D1,
        ],
        av: [
          Shruti.N1,
          Shruti.D1,
          Shruti.P,
          Shruti.M2,
          Shruti.G2,
          Shruti.M2,
          Shruti.G2,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.Bhogi:
      return {
        aa: [Shruti.G2, Shruti.M2, Shruti.P, Shruti.D1, Shruti.N1, Shruti.D1],
        av: [Shruti.N1, Shruti.D1, Shruti.P, Shruti.M2, Shruti.G2],
      };
    case JanyaRaaga.Chitthakarshani:
      return {
        aa: [Shruti.R1, Shruti.G2, Shruti.M2, Shruti.D1],
        av: [Shruti.D1, Shruti.M2, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.NavarasaMaalaa:
      return {
        aa: [Shruti.R1, Shruti.G2, Shruti.M2, Shruti.P, Shruti.D1],
        av: [Shruti.N1, Shruti.D1, Shruti.P, Shruti.M2, Shruti.R1],
      };
    case JanyaRaaga.SindhuGowri:
      return {
        aa: [Shruti.R1, Shruti.G2, Shruti.M2, Shruti.P, Shruti.D1, Shruti.N1],
        av: [Shruti.N1, Shruti.D1, Shruti.M2, Shruti.G2, Shruti.M2, Shruti.R1],
      };

    // From Hanumatodi
    case JanyaRaaga.Janatodi:
      return {
        aa: [Shruti.R1, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.AmritaDhanyaasi:
      return {
        aa: [Shruti.R1, Shruti.G2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.Asaaveri:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [
          Shruti.N2,
          Shruti.S,
          Shruti.P,
          Shruti.D1,
          Shruti.M1,
          Shruti.P,
          Shruti.R1,
          Shruti.G2,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.Bhaanuchandrika:
      return {
        aa: [Shruti.M1, Shruti.D1, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.M1, Shruti.G1],
      };
    case JanyaRaaga.Bhadratodi:
      return {
        aa: [Shruti.R1, Shruti.G2, Shruti.M1, Shruti.D1],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.G2],
      };
    case JanyaRaaga.Bhoopaalam:
      return {
        aa: [Shruti.R1, Shruti.G2, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.Chandrikatodi:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.Deshikatodi:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.Dhanyaasi:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.Divyamaalati:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.Ghanta:
      return {
        aa: [Shruti.G2, Shruti.R2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.Kalaasaaveri:
      return {
        aa: [Shruti.R1, Shruti.G2, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.Kanakasaaveri:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.Naagavaraali:
      return {
        aa: [
          Shruti.R1,
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.M1,
          Shruti.D1,
          Shruti.N2,
        ],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.Prabhupriya:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.Punnaagatodi: ///
      return {
        aa: [Shruti.N1, Shruti.S, Shruti.R1, Shruti.G2, Shruti.M1, Shruti.P],
        av: [
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.R1,
          Shruti.S,
          Shruti.N2,
          Shruti.D1,
        ],
      };
    case JanyaRaaga.Punnagavarali: ///
      return {
        aa: [
          Shruti.N2,
          Shruti.S,
          Shruti.R1,
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.D1,
          Shruti.N2,
        ],
        av: [
          Shruti.N2,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.R1,
          Shruti.S,
          Shruti.N2,
        ],
      };
    case JanyaRaaga.Shravanamallika:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.Sowjanya:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.D1],
        av: [Shruti.D1, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.ShuddhaSeemantini:
      return {
        aa: [Shruti.R1, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.ShuddhaTodi:
      return {
        aa: [Shruti.R1, Shruti.G2, Shruti.M1, Shruti.D1, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.M1, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.Sindhubhairavi: ///
      return {
        aa: [
          Shruti.S,
          Shruti.R2,
          Shruti.G2,
          Shruti.M1,
          Shruti.G2,
          Shruti.P,
          Shruti.D1,
          Shruti.N2,
        ],
        av: [
          Shruti.N2,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.R1,
          Shruti.S,
          Shruti.N2,
          Shruti.S,
        ],
      };
    case JanyaRaaga.Swarnamalli:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N1],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R1],
      };

    // From Dhenuka
    case JanyaRaaga.Dhunibhinnashadjam:
      return {
        aa: [
          Shruti.R1,
          Shruti.G2,
          Shruti.R1,
          Shruti.P,
          Shruti.M1,
          Shruti.P,
          Shruti.N3,
        ],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.Bhinnashadjam:
      return {
        aa: [
          Shruti.R1,
          Shruti.G2,
          Shruti.R1,
          Shruti.P,
          Shruti.M1,
          Shruti.P,
          Shruti.N3,
        ],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.Mohananaata:
      return {
        aa: [
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.P,
          Shruti.N3,
        ],
        av: [Shruti.N3, Shruti.P, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.Udayaravichandrika:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.P, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.Vasanthatodi:
      return {
        aa: [Shruti.R1, Shruti.G2, Shruti.M1, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.M1, Shruti.R1],
      };

    // From Nātakapriya
    case JanyaRaaga.Nataabharanam:
      return {
        aa: [Shruti.R1, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.Alankaarapriya:
      return {
        aa: [Shruti.R1, Shruti.G2, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.Bhaagyashabari:
      return {
        aa: [Shruti.R1, Shruti.G2, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.Deeparamu:
      return {
        aa: [Shruti.R1, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.N2,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.Gunaavati:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Hindoladeshikam:
      return {
        aa: [
          Shruti.M1,
          Shruti.R1,
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.N2,
        ],
        av: [Shruti.P, Shruti.N2, Shruti.D2, Shruti.M1, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.Kanakadri:
      return {
        aa: [Shruti.R1, Shruti.G2, Shruti.P, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.Maatangakaamini:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.Naatyadhaarana:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Niranjana:
      return {
        aa: [Shruti.R1, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.Shaanthabhaashini:
      return {
        aa: [Shruti.R1, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1],
      };
    case JanyaRaaga.Shivashakti:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.G2],
      };

    // From Kokilapriyaa
    case JanyaRaaga.Kokilaaravam:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Chitramani:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.Jnaanachintaamani:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.D2, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Kowmaari:
      return {
        aa: [Shruti.R1, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.ShuddhaLalitha:
      return {
        aa: [Shruti.P, Shruti.M1, Shruti.D2, Shruti.N3],
        av: [
          Shruti.N3,
          Shruti.S,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.Vardhani:
      return {
        aa: [
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.N3,
        ],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.Vasantamalli:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.Vasantanaaraayani:
      return {
        aa: [Shruti.R1, Shruti.G2, Shruti.M1, Shruti.P],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R1],
      };

    // From Rupavati
    case JanyaRaaga.Rowpyanaka:
      return {
        aa: [Shruti.M1, Shruti.P, Shruti.D3, Shruti.N3],
        av: [Shruti.N3, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.Shyaamakalyaani:
      return {
        aa: [Shruti.M1, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D3, Shruti.N3],
        av: [
          Shruti.N3,
          Shruti.P,
          Shruti.D3,
          Shruti.N3,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.R1,
        ],
      };

    // From Gāyakapriya
    case JanyaRaaga.GeyaHejjajji:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Hejjajji:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.N1, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Kalaakaanti:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.D1, Shruti.N1],
        av: [Shruti.N1, Shruti.D1, Shruti.P, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Kalkada:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.P, Shruti.D1, Shruti.N1],
        av: [Shruti.N1, Shruti.D1, Shruti.P, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Kalpanadhaarini:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.N1, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };

    // From Vakulābharanam
    case JanyaRaaga.VaateeVasantabhairavi:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.D1, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Aahiri:
      return {
        aa: [
          Shruti.R1,
          Shruti.S,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.D1,
          Shruti.N2,
        ],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Amudhasurabhi:
      return {
        aa: [Shruti.M1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Devipriya:
      return {
        aa: [Shruti.G3, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Kalindaja:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Kuvalayabharanam:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.D1, Shruti.N1],
        av: [Shruti.N1, Shruti.D1, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Mukthipradayini:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.P, Shruti.D2, Shruti.P, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Sallapa:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.D1, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Soma:
      return {
        aa: [Shruti.R1, Shruti.P, Shruti.M1, Shruti.D1, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.D1,
          Shruti.M1,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.Suuryaa:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.D1, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.ShuddhaKaambhoji:
      return {
        aa: [Shruti.G3, Shruti.R1, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Vasantabhairavi:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.D1, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.D1,
          Shruti.M1,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.VasantaMukhaari:
      return {
        aa: [Shruti.M1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Vijayollaasini:
      return {
        aa: [
          Shruti.R1,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.M1,
          Shruti.D1,
          Shruti.N2,
        ],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };

    case JanyaRaaga.Ardhradesi:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N3],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Bhaavini:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Bibhaas:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Bowli:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.P, Shruti.D1],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.BowliRaamakriya:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.P, Shruti.D1],
        av: [
          Shruti.N3,
          Shruti.P,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.Chaaruvardhani:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N3],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Chaayagowla:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Chandrachooda:
      return {
        aa: [Shruti.M1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Deshyagowla:
      return {
        aa: [Shruti.R1, Shruti.P, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.R1],
      };
    case JanyaRaaga.Devaranji:
      return {
        aa: [Shruti.M1, Shruti.P, Shruti.D1, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1],
      };
    case JanyaRaaga.Ekakshari:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N3],
        av: [
          Shruti.N1,
          Shruti.P,
          Shruti.M1,
          Shruti.R1,
          Shruti.G3,
          Shruti.M1,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.Ghanasindhu:
      return {
        aa: [
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.D1,
          Shruti.N3,
          Shruti.D1,
        ],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Gowla:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.N3],
        av: [
          Shruti.N3,
          Shruti.P,
          Shruti.M1,
          Shruti.R1,
          Shruti.G3,
          Shruti.M1,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.Gowlipantu:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.N3],
        av: [
          Shruti.N3,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.D1,
          Shruti.M1,
          Shruti.G3,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.Gowri:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Gummakaambhoji:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.P, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Gundakriya:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.N3],
        av: [
          Shruti.N3,
          Shruti.P,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.Gurjari:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N3],
        av: [Shruti.D1, Shruti.N3, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Jaganmohini:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Kalyaanakesari:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Kannadabangaala:
      return {
        aa: [
          Shruti.R1,
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.D1,
          Shruti.P,
          Shruti.D1,
        ],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.KarnaatakaSaaranga:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Lalitaa:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Lalitapanchamam:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.D1, Shruti.N3],
        av: [
          Shruti.N3,
          Shruti.D1,
          Shruti.M1,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.Maalavakurinji:
      return {
        aa: [Shruti.G3, Shruti.P, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Maalavapanchamam:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Maargadesi:
      return {
        aa: [
          Shruti.R1,
          Shruti.G3,
          Shruti.R1,
          Shruti.G3,
          Shruti.D1,
          Shruti.M1,
          Shruti.P,
          Shruti.D1,
        ],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Malahari:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Mallikavasantam:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Mangalakaishiki:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.G3, Shruti.D1, Shruti.P],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Manolayam:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Maruva:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.D1, Shruti.N3],
        av: [
          Shruti.N3,
          Shruti.D1,
          Shruti.P,
          Shruti.G3,
          Shruti.M1,
          Shruti.G3,
          Shruti.R1,
          Shruti.S,
          Shruti.R1,
          Shruti.G3,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.Mechabowli:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.P, Shruti.D1],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Megharanjani:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.N3],
        av: [Shruti.N3, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Nadanamakriya: ///
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N3],
        av: [
          Shruti.N3,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R1,
          Shruti.S,
          Shruti.N3,
        ],
      };
    case JanyaRaaga.Paadi:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.P, Shruti.D1, Shruti.P, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Pharaju:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Poornalalita:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Poorvi:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Poorvikavasanta:
      return {
        aa: [Shruti.M1, Shruti.G3, Shruti.M1, Shruti.D1, Shruti.N3],
        av: [
          Shruti.N3,
          Shruti.D1,
          Shruti.M1,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.Prataapadhanyaasi:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Prataaparanjani:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Puranirmai:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.P, Shruti.D1],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Raamakali:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.P, Shruti.D1],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Raamakriya:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N3],
        av: [
          Shruti.N3,
          Shruti.P,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.Revagupti:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Rukhmaambari:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.P, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Saamantadeepara:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.SaarangaNaata:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [
          Shruti.N3,
          Shruti.S,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.Saaveri:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Salanganaata:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Satyaavati:
      return {
        aa: [Shruti.G3, Shruti.R1, Shruti.G3, Shruti.P, Shruti.D1],
        av: [
          Shruti.N3,
          Shruti.D1,
          Shruti.N3,
          Shruti.P,
          Shruti.D1,
          Shruti.P,
          Shruti.G3,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.SindhuRaamakriya:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1, Shruti.G3],
      };
    case JanyaRaaga.Surasindhu:
      return {
        aa: [
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.D1,
          Shruti.N3,
          Shruti.D1,
        ],
        av: [
          Shruti.N3,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.R1,
          Shruti.G3,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.Taarakagowla:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Takka:
      return {
        aa: [
          Shruti.R1,
          Shruti.S,
          Shruti.G3,
          Shruti.M1,
          Shruti.G3,
          Shruti.P,
          Shruti.M1,
          Shruti.D1,
          Shruti.N3,
        ],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Ushaavali:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.N3, Shruti.D1, Shruti.M1, Shruti.P, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Vishaarada:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.P, Shruti.M1, Shruti.R1],
      };

    // From Chakravākam
    case JanyaRaaga.Toyavegavaahini:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.AahirBhairavi:
      return {
        aa: [
          Shruti.R1,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.N2,
          Shruti.D2,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
        ],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.P,
          Shruti.G3,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.Bhakthapriya:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.R1,
          Shruti.M1,
          Shruti.G3,
        ],
      };
    case JanyaRaaga.Bhujaangini:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Bindhumaalini:
      return {
        aa: [Shruti.G3, Shruti.R1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.S,
          Shruti.D2,
          Shruti.P,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.G3,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.Chakranaaraayani:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Ghoshini:
      return {
        aa: [
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.N2,
          Shruti.D2,
        ],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Guhapriya:
      return {
        aa: [
          Shruti.R1,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.P,
          Shruti.M1,
          Shruti.D2,
          Shruti.N2,
        ],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.S,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.Kalaavati:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.S, Shruti.R1],
      };
    case JanyaRaaga.Kokilaa:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Malayamaarutam:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Mukthaangi:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.D2, Shruti.N2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Mukundamaalini:
      return {
        aa: [Shruti.R1, Shruti.G2, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.Poornapanchamam: ///
      return {
        aa: [
          Shruti.P,
          Shruti.M1,
          Shruti.S,
          Shruti.R1,
          Shruti.S,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
        ],
        av: [
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R1,
          Shruti.S,
          Shruti.N2,
        ],
      };
    case JanyaRaaga.Pravritti:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Raagamanjari:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Rasikaranjani:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.P],
        av: [Shruti.D2, Shruti.P, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.RudraPanchami:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [Shruti.N3, Shruti.D2, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.ShreeNabhomaargini:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Shyaamali:
      return {
        aa: [Shruti.G3, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Subhaashini: ///
      return {
        aa: [
          Shruti.D2,
          Shruti.N2,
          Shruti.D2,
          Shruti.R1,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
        ],
        av: [
          Shruti.M1,
          Shruti.G3,
          Shruti.R1,
          Shruti.S,
          Shruti.N2,
          Shruti.D2,
          Shruti.N2,
        ],
      };
    case JanyaRaaga.Valaji:
      return {
        aa: [Shruti.G3, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.G3],
      };
    case JanyaRaaga.Veenadhaari:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Vegavaahini:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.D2, Shruti.N2, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };

    // From Sooryakāntam
    case JanyaRaaga.Chaayaavathi:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.D2, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Bhairavam:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N3],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Haridarpa:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N3],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Jayasamvardhani:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N3],
        av: [Shruti.N3, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Jeevantikaa:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Kusumamaaruta:
      return {
        aa: [Shruti.M1, Shruti.P, Shruti.D2, Shruti.N3],
        av: [
          Shruti.N3,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R1,
          Shruti.G3,
          Shruti.M1,
        ],
      };
    case JanyaRaaga.Naagachooḍaamani:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2],
        av: [
          Shruti.D2,
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Rohini:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.M2, Shruti.D2, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.M2, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Saamakannada:
      return {
        aa: [
          Shruti.R2,
          Shruti.M1,
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.N3,
        ],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Sowraashtram:
      return {
        aa: [
          Shruti.R1,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.M1,
          Shruti.D2,
          Shruti.N3,
        ],
        av: [
          Shruti.N3,
          Shruti.D2,
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.SuddhaGowla:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.P, Shruti.M1, Shruti.R1],
      };
    case JanyaRaaga.Supradeepam:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N3],
        av: [
          Shruti.N3,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.Vasanthaa:
      return {
        aa: [Shruti.M1, Shruti.G3, Shruti.M1, Shruti.D2, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.M1, Shruti.G3, Shruti.R1],
      };

    // From Hatakāmbari
    case JanyaRaaga.Jayashuddhamaalavi:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.D3, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Hamsanantini:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P],
        av: [Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Kallola:
      return {
        aa: [Shruti.P, Shruti.D3, Shruti.N3],
        av: [Shruti.N3, Shruti.D3, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Simhala:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D3, Shruti.N3],
        av: [
          Shruti.N3,
          Shruti.D3,
          Shruti.N3,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R1,
        ],
      };

    // From Jhankāradhvani
    case JanyaRaaga.Jhankaarabhramari:
      return {
        aa: [
          Shruti.R2,
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.D1,
          Shruti.N1,
          Shruti.D1,
          Shruti.P,
          Shruti.D1,
        ],
        av: [Shruti.N1, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Bhaarati:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P],
        av: [Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Chittaranjani:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N1],
        av: [Shruti.N1, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Jalmika:
      return {
        aa: [Shruti.R2, Shruti.G1, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N1],
        av: [
          Shruti.N1,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.G1,
          Shruti.S,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Lalitabhairavi:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.N1, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };

    // From Natabhairavi
    case JanyaRaaga.Naareereetigowla:
      return {
        aa: [
          Shruti.G2,
          Shruti.R2,
          Shruti.G2,
          Shruti.M1,
          Shruti.N2,
          Shruti.D1,
          Shruti.M1,
          Shruti.N2,
          Shruti.N2,
        ],
        av: [
          Shruti.N2,
          Shruti.D1,
          Shruti.M1,
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Abheri:
      return {
        aa: [Shruti.M1, Shruti.G2, Shruti.M1, Shruti.P, Shruti.P],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Anandabhairavi:
      return {
        aa: [
          Shruti.G2,
          Shruti.R2,
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.P,
        ],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Amrithavaahini:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Bhairavi:
      return {
        aa: [
          Shruti.G2,
          Shruti.R2,
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.N2,
        ],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Bhuvanagaandhaari:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.Chapagantarva: ///
      return {
        aa: [Shruti.S, Shruti.G2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.D1, Shruti.M1, Shruti.G2, Shruti.R2, Shruti.S, Shruti.N2],
      };
    case JanyaRaaga.DarbaariKaanada: ///
      return {
        aa: [
          Shruti.N2,
          Shruti.S,
          Shruti.R2,
          Shruti.G2,
          Shruti.R2,
          Shruti.S,
          Shruti.M1,
          Shruti.P,
          Shruti.D1,
          Shruti.N2,
        ],
        av: [
          Shruti.D1,
          Shruti.N2,
          Shruti.P,
          Shruti.M1,
          Shruti.P,
          Shruti.G2,
          Shruti.M1,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Devakriya:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.D1,
          Shruti.N2,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Dhanashree:
      return {
        aa: [Shruti.N2, Shruti.S, Shruti.G2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.Dharmaprakaashini:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.DilipikaVasantha:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.P, Shruti.N2],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Divyagaandhaari:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.Gopikaavasantam:
      return {
        aa: [
          Shruti.R2,
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.D1,
          Shruti.P,
          Shruti.N2,
        ],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Hindolam:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.D1, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.Hindolavasanta:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N2, Shruti.D1],
        av: [
          Shruti.N2,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.D2,
          Shruti.M1,
          Shruti.G2,
        ],
      };
    case JanyaRaaga.Indughantarava: ///
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.P],
        av: [
          Shruti.N2,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.R2,
          Shruti.S,
          Shruti.N2,
        ],
      };
    case JanyaRaaga.Jayanthashrii:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.D1, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.M1, Shruti.P, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.Jingala:
      return {
        aa: [
          Shruti.R2,
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.D1,
          Shruti.N2,
          Shruti.D1,
          Shruti.P,
        ],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Jonpuri:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Kaatyaayani:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Kanakavasantham:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.N2, Shruti.D1],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Kshanika:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.Maanji:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.P,
          Shruti.M1,
          Shruti.P,
          Shruti.G2,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Mahati:
      return {
        aa: [Shruti.G2, Shruti.P, Shruti.D1, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Malkosh:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.D1, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.Maargahindoolam:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.Naagagaandhaari:
      return {
        aa: [
          Shruti.R2,
          Shruti.M1,
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.D1,
          Shruti.N2,
        ],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.NavarathnaVilaasam:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.P],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Niilamati:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.Niilaveni:
      return {
        aa: [
          Shruti.R2,
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.D1,
          Shruti.N2,
          Shruti.D1,
        ],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Poornashadjam:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.N2, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Raajaraajeshwari:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Saaramati:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.SaarangaKaapi:
      return {
        aa: [
          Shruti.R1,
          Shruti.P,
          Shruti.M1,
          Shruti.R1,
          Shruti.P,
          Shruti.R1,
          Shruti.M1,
          Shruti.P,
          Shruti.N2,
        ],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R1],
      };
    case JanyaRaaga.Sharadapriya:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.ShreeNavarasachandrika:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.SindhuDhanyaasi:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.D1,
          Shruti.M1,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.ShuddhaDesi:
      return {
        aa: [
          Shruti.R2,
          Shruti.G2,
          Shruti.R2,
          Shruti.M1,
          Shruti.P,
          Shruti.D1,
          Shruti.N2,
        ],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.ShuddhaSaalavi:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Sukumaari:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.N2, Shruti.D1, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Sushama:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Sutradhaari:
      return {
        aa: [
          Shruti.R2,
          Shruti.M1,
          Shruti.P,
          Shruti.D1,
          Shruti.S,
          Shruti.S,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.R2,
        ],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Tarkshika:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.R2,
          Shruti.G2,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Udayaraaga:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.Vasantavaraali:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.G2, Shruti.R2],
      };

    // From Keeravāni
    case JanyaRaaga.Keeranaavali:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N3],
        av: [Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Aymmukhan:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.Bhaanupriya:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Chandrika:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.P, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Gaganabhoopaalam:
      return {
        aa: [Shruti.M1, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Hamsapancama:
      return {
        aa: [
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.N3,
          Shruti.D1,
          Shruti.N3,
          Shruti.P,
        ],
        av: [Shruti.N3, Shruti.D1, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Hamsavaahini:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Jayashree:
      return {
        aa: [
          Shruti.R2,
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.D1,
          Shruti.N3,
          Shruti.D1,
        ],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Kadaram:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.KalyaanaVasantam:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Kusumaavali:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1],
        av: [
          Shruti.N3,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.M1,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.Maadhavi:
      return {
        aa: [Shruti.M1, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N3],
        av: [
          Shruti.N3,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.S,
          Shruti.M1,
          Shruti.G2,
          Shruti.R1,
        ],
      };
    case JanyaRaaga.Priyadarshani:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Rishipriya:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Saamapriya:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Shrothasvini:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.P, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.Vasanthamanohari:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.M1, Shruti.G2, Shruti.R2],
      };

    // From Kharaharapriya
    case JanyaRaaga.Shree:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.P,
          Shruti.D2,
          Shruti.N2,
          Shruti.P,
          Shruti.M1,
          Shruti.R2,
          Shruti.G2,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Andolikaa:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Abhogi:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.D2],
        av: [Shruti.D2, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.AadiKaapi:
      return {
        aa: [
          Shruti.R2,
          Shruti.M1,
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.N2,
        ],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Aaryamati:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.P, Shruti.D2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.D2,
          Shruti.M1,
          Shruti.G2,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Agnikopa:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Baalachandrika:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.BasantBahaar: ///
      return {
        aa: [
          Shruti.M2,
          Shruti.P,
          Shruti.G3,
          Shruti.M2,
          Shruti.N3,
          Shruti.D1,
          Shruti.N3,
          Shruti.S,
        ],
        av: [
          Shruti.R2,
          Shruti.S,
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.M1,
          Shruti.G2,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Bhaageshri:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.G2,
          Shruti.M1,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Bhagavatapriya:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Bhagavathpriya:
      return {
        aa: [
          Shruti.R2,
          Shruti.G2,
          Shruti.M1,
          Shruti.R2,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.N2,
        ],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Bhimpalaas: ///
      return {
        aa: [Shruti.N2, Shruti.S, Shruti.G2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.BrindaavanaSaaranga:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.R2, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Brindaavani:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Chakrapradipta:
      return {
        aa: [
          Shruti.R2,
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.M1,
          Shruti.D2,
          Shruti.N2,
        ],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.Darbar: ///
      return {
        aa: [
          Shruti.R2,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.N2,
          Shruti.S,
          Shruti.R2,
          Shruti.S,
        ],
        av: [
          Shruti.N2,
          Shruti.S,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.R2,
          Shruti.G2,
          Shruti.G2,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Dayavati:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.Devaamruthavarshani:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.N2, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.DevaManohari:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.N2, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Dhanakaapi:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.N2,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Dilipika:
      return {
        aa: [
          Shruti.R2,
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.N2,
          Shruti.D2,
          Shruti.N2,
          Shruti.P,
          Shruti.D2,
          Shruti.N2,
        ],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Durga:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.D2, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.GowlaKannada:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.HamsaAabheri:
      return {
        aa: [Shruti.G2, Shruti.P, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.Haridasapriya:
      return {
        aa: [Shruti.P, Shruti.M1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.N2,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Harinaaraayani:
      return {
        aa: [
          Shruti.R2,
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.M1,
          Shruti.D2,
          Shruti.N2,
        ],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.HindustaaniKaapi:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.N2,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.M1,
          Shruti.D2,
          Shruti.P,
          Shruti.G2,
          Shruti.R2,
          Shruti.S,
          Shruti.N2,
        ],
      };
    case JanyaRaaga.Huseni:
      return {
        aa: [
          Shruti.R2,
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.N2,
          Shruti.D2,
          Shruti.N2,
        ],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Jataadhaari:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Jayamanohari:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Jayanaaraayani:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Jayanthasena:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.Kanadaa:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Kaapi:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N3],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.N2,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Kaapijingala: ///
      return {
        aa: [Shruti.N2, Shruti.S, Shruti.R2, Shruti.G2, Shruti.M1],
        av: [
          Shruti.M1,
          Shruti.G2,
          Shruti.R2,
          Shruti.S,
          Shruti.N2,
          Shruti.D2,
          Shruti.N2,
        ],
      };
    case JanyaRaaga.Kalaanidhi:
      return {
        aa: [
          Shruti.R2,
          Shruti.G2,
          Shruti.M1,
          Shruti.S,
          Shruti.P,
          Shruti.M1,
          Shruti.D2,
          Shruti.N2,
        ],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Kalika:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Kannadagowla:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.KarnaatakaHindolam:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.KarnaatakaKaapi:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.KarnaatakaDevagaandhari:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Karnaranjani:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.G2, Shruti.P, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Kowmodaki:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.D2, Shruti.P, Shruti.G2],
      };
    case JanyaRaaga.Kowshika:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.G2, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Lalitamanohari:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Maadhavamanohari:
      return {
        aa: [
          Shruti.R2,
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.N2,
          Shruti.D2,
          Shruti.N2,
        ],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Maalavashree:
      return {
        aa: [
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.N2,
          Shruti.D2,
          Shruti.N2,
          Shruti.P,
          Shruti.D2,
          Shruti.N2,
        ],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Maayapradeeptam:
      return {
        aa: [Shruti.M1, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Madhyamaraavali:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Madhyamaavathi:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Mahaanandhi:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Mandaamari:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [
          Shruti.N2,
          Shruti.S,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Mangalaavathi:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Manirangu:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Manjari:
      return {
        aa: [
          Shruti.G2,
          Shruti.R2,
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.N2,
          Shruti.D2,
          Shruti.N2,
        ],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Manohari:
      return {
        aa: [Shruti.G2, Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Manorama:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.P],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Maruvadhanyaasi:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.D2,
          Shruti.M1,
          Shruti.G2,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Mishramanolayam:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Mishrashivaranjani:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.G3, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.MiyanMalhaar:
      return {
        aa: [
          Shruti.R2,
          Shruti.P,
          Shruti.M1,
          Shruti.P,
          Shruti.N2,
          Shruti.D2,
          Shruti.N3,
        ],
        av: [
          Shruti.N2,
          Shruti.P,
          Shruti.M1,
          Shruti.P,
          Shruti.G2,
          Shruti.M1,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Mukhaari:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N2, Shruti.D2],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Naadachintaamani:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.N2, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Naadataarangini:
      return {
        aa: [Shruti.P, Shruti.M1, Shruti.R2, Shruti.G2],
        av: [
          Shruti.P,
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.R2,
          Shruti.G2,
        ],
      };
    case JanyaRaaga.Naadavarangini:
      return {
        aa: [Shruti.P, Shruti.M1, Shruti.N2, Shruti.D2, Shruti.N2],
        av: [
          Shruti.P,
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.R2,
          Shruti.G2,
        ],
      };
    case JanyaRaaga.Naagari:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.Naagavalli:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Naayaki:
      return {
        aa: [
          Shruti.R2,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
        ],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.R2,
          Shruti.G2,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Nigamagaamini: ///
      return {
        aa: [Shruti.M1, Shruti.G2, Shruti.S, Shruti.G2, Shruti.M1, Shruti.N2],
        av: [Shruti.N2, Shruti.M1, Shruti.G2, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.Nirmalaangi:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Omkaari:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Panchamam:
      return {
        aa: [Shruti.R2, Shruti.D2, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Patadeep: ///
      return {
        aa: [Shruti.N2, Shruti.S, Shruti.G2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.R2,
          Shruti.S,
          Shruti.N2,
          Shruti.S,
          Shruti.G2,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Phalamanjari:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.D2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.M1,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Phalaranjani:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.M1, Shruti.D2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.M1,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Peeloo: ///
      return {
        aa: [
          Shruti.N2,
          Shruti.S,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
        ],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.R2,
          Shruti.S,
          Shruti.N2,
        ],
      };
    case JanyaRaaga.Poornakalaanidhi:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Pushpalathika:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Ratipatipriya:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Reethigowla:
      return {
        aa: [
          Shruti.G2,
          Shruti.R2,
          Shruti.G2,
          Shruti.M1,
          Shruti.N2,
          Shruti.D2,
          Shruti.M1,
          Shruti.N2,
          Shruti.N2,
        ],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.M1,
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Rudrapriyaa:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Saalagabhairavi:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Saarang:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Saindhavi: ///
      return {
        aa: [
          Shruti.N2,
          Shruti.D2,
          Shruti.N2,
          Shruti.S,
          Shruti.R2,
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.N2,
        ],
        av: [
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.R2,
          Shruti.S,
          Shruti.N2,
          Shruti.D2,
          Shruti.N2,
        ],
      };
    case JanyaRaaga.Sangrama:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.D2, Shruti.N2, Shruti.P],
        av: [Shruti.N2, Shruti.D2, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Sankraandanapriyaa:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Sarvachoodaamani:
      return {
        aa: [
          Shruti.R2,
          Shruti.M1,
          Shruti.G2,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.N2,
        ],
        av: [
          Shruti.N2,
          Shruti.P,
          Shruti.D2,
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.R2,
          Shruti.G2,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Shivapriyaa:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Shivaranjani:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.ShreeManohari:
      return {
        aa: [Shruti.G2, Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.ShreeManoranjani:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Shreeranjani:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Siddhasena:
      return {
        aa: [Shruti.G2, Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.M1,
          Shruti.P,
          Shruti.M1,
          Shruti.R2,
          Shruti.G2,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.SuddhaBangaala:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.R2, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.SuddhaBhairavi:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.N2, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.SuddhaDhanyaasi:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.SuddhaHindolam:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.G2],
      };
    case JanyaRaaga.SuddhaManohari:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.R2, Shruti.G2],
      };
    case JanyaRaaga.SuddhaVelaavali:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.N2,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Sugunabhooshani:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.D2,
          Shruti.M1,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Swarabhooshani:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Swarakalaanidhi:
      return {
        aa: [Shruti.M1, Shruti.G2, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.N2,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Swararanjani:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Tavamukhaari:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.P, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Vajrakaanti:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };

    // From Gowri Manohari
    case JanyaRaaga.Gowrivelaavali:
      return {
        aa: [
          Shruti.R2,
          Shruti.G2,
          Shruti.S,
          Shruti.R2,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
        ],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Gowrishankar:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Hamsadeepika:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.D2],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Hrudkamali:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.D2, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Lavanthika:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Sundaramanohari:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Vasantashree:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.D2, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.M1, Shruti.G2, Shruti.R2],
      };
    case JanyaRaaga.Velaavali:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.D2, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };

    // From Varunapriyaa
    case JanyaRaaga.Veeravasantham:
      return {
        aa: [Shruti.R2, Shruti.G2, Shruti.M1, Shruti.P],
        av: [Shruti.N3, Shruti.D3, Shruti.P, Shruti.M1, Shruti.G2, Shruti.R2],
      };

    // From Māraranjani
    case JanyaRaaga.Sharaavathi:
      return {
        aa: [
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.D1,
          Shruti.N1,
          Shruti.D1,
        ],
        av: [Shruti.N1, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Devasalaga:
      return {
        aa: [Shruti.G3, Shruti.P, Shruti.D1, Shruti.N1],
        av: [Shruti.N1, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Kesari:
      return {
        aa: [
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.M1,
          Shruti.D1,
          Shruti.P,
          Shruti.D1,
        ],
        av: [
          Shruti.D1,
          Shruti.N1,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Gayakamandini:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Raajathilaka:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P],
        av: [Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };

    // From Chārukeshi
    case JanyaRaaga.Tarangini:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.P, Shruti.D1, Shruti.N2, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Chirswaroopi:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Maaravi:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Poorvadhanyaasi:
      return {
        aa: [Shruti.M1, Shruti.G3, Shruti.M1, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.ShivaManohari:
      return {
        aa: [Shruti.M1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N2],
        av: [Shruti.N2, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Shukrajyothi:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.D1, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Ushaabharanam:
      return {
        aa: [
          Shruti.G3,
          Shruti.M1,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.D1,
          Shruti.N2,
        ],
        av: [
          Shruti.N2,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.R2,
        ],
      };

    // From Sarasāngi
    case JanyaRaaga.Sowrasenaa:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Haripriya:
      return {
        aa: [Shruti.R1, Shruti.G3, Shruti.M1, Shruti.P],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Srirangapriya:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.KamalaaManohari:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Madhulika:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.N3],
        av: [Shruti.N3, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Nalinakaanthi:
      return {
        aa: [Shruti.G3, Shruti.R2, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Neelamani:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Salavi:
      return {
        aa: [
          Shruti.G3,
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.D1,
          Shruti.N3,
          Shruti.D1,
        ],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Sarasaanana:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Saraseeruha:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.D1, Shruti.N1, Shruti.D1],
        av: [Shruti.N1, Shruti.D1, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Simhavaahini:
      return {
        aa: [Shruti.G2, Shruti.M1, Shruti.P, Shruti.D1, Shruti.N3],
        av: [Shruti.N3, Shruti.D1, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Surasena:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D1],
        av: [
          Shruti.N3,
          Shruti.D1,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.S,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Vasanthi:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.P, Shruti.D1],
        av: [Shruti.D1, Shruti.P, Shruti.G3, Shruti.R2],
      };

    // From Harikāmbhoji
    case JanyaRaaga.Harikedaaragowla:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Ambhojini:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.D2],
        av: [Shruti.D2, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Andhali:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.P,
          Shruti.M1,
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Aparoopam:
      return {
        aa: [
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.N2,
          Shruti.D2,
          Shruti.N2,
        ],
        av: [Shruti.D2, Shruti.M1, Shruti.G3, Shruti.R2, Shruti.G3],
      };
    case JanyaRaaga.Baalahamsa:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.R2,
          Shruti.M1,
          Shruti.G3,
        ],
      };
    case JanyaRaaga.Bahudaari:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Bhoopaali:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Chaayalagakhamaas:
      return {
        aa: [Shruti.M1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Chaayataarangini:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Chandrahasitham:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Dasharatipriya:
      return {
        aa: [
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.N2,
          Shruti.D2,
        ],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Dayaranjani:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Desh:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Deshaakshi:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.P, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Deshkaar:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Dwaithachintaamani:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.P, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Dwijaavanthi:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.R2,
          Shruti.G2,
          Shruti.R2,
          Shruti.S,
          Shruti.N2,
          Shruti.D2,
          Shruti.N2,
        ],
      };
    case JanyaRaaga.Eeshamanohari:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.R2,
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Eeshaivaridhi:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Gaandhaaralola:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Gavathi:
      return {
        aa: [Shruti.M1, Shruti.P, Shruti.N2],
        av: [
          Shruti.D2,
          Shruti.M1,
          Shruti.P,
          Shruti.G3,
          Shruti.M1,
          Shruti.R2,
          Shruti.N2,
        ],
      };
    case JanyaRaaga.Guhamanohari:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Guharanjani:
      return {
        aa: [Shruti.R2, Shruti.S, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.N2, Shruti.P, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Hamsaroopini:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.P, Shruti.D2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Harikedaaram:
      return {
        aa: [
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.N2,
          Shruti.S,
          Shruti.N2,
        ],
        av: [
          Shruti.N2,
          Shruti.S,
          Shruti.D2,
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Harini:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2, Shruti.D2],
        av: [
          Shruti.N2,
          Shruti.S,
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.G2,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Harithapriya:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
          Shruti.G3,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Hemasaaranga:
      return {
        aa: [
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.N2,
          Shruti.D2,
        ],
        av: [Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Jaijaivanthi: ///
      return {
        aa: [
          Shruti.R2,
          Shruti.G3,
          Shruti.R2,
          Shruti.S,
          Shruti.D2,
          Shruti.N2,
          Shruti.P,
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.N2,
        ],
        av: [
          Shruti.N2,
          Shruti.S,
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.D2,
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
          Shruti.G3,
          Shruti.R2,
          Shruti.S,
        ],
      };
    case JanyaRaaga.Jaithshree:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.JanaSammodhini:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Jayaraama:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Jhinjothi: ///
      return {
        aa: [
          Shruti.D2,
          Shruti.S,
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.N2,
        ],
        av: [
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
          Shruti.S,
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.D2,
          Shruti.S,
        ],
      };
    case JanyaRaaga.Jog:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.N3],
        av: [
          Shruti.N2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.G3,
          Shruti.S,
          Shruti.G2,
        ],
      };
    case JanyaRaaga.Jujahuli:
      return {
        aa: [Shruti.M1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Kaambhoji:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
          Shruti.S,
          Shruti.N3,
          Shruti.P,
          Shruti.D2,
        ],
      };
    case JanyaRaaga.KaapiNaaraayani:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Kamaas:
      return {
        aa: [Shruti.M1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.KarnaatakaBehaag:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.N2,
          Shruti.P,
          Shruti.D2,
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.KarnaatakaDevagaandhaari:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.KarnaatakaKhamaas:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Kedaaragowla:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Keshavapriyaa:
      return {
        aa: [Shruti.R2, Shruti.S, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.S, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Kokiladhwani:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.D2, Shruti.N2, Shruti.D2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.N2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Kokilavaraali:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.M1,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
          Shruti.G3,
        ],
      };
    case JanyaRaaga.Kunthalavaraali:
      return {
        aa: [Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1],
      };
    case JanyaRaaga.Maalavi:
      return {
        aa: [
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.N2,
          Shruti.M1,
          Shruti.D2,
          Shruti.N2,
        ],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.N2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Madhurakokila:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Mahathi:
      return {
        aa: [Shruti.G3, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.G3],
      };
    case JanyaRaaga.Mahuri:
      return {
        aa: [
          Shruti.R2,
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
          Shruti.G3,
          Shruti.P,
          Shruti.D2,
        ],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
          Shruti.S,
          Shruti.R2,
          Shruti.G3,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Manjupriya:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Manoharam:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Mattakokila:
      return {
        aa: [Shruti.R2, Shruti.P, Shruti.D2, Shruti.N2, Shruti.D2],
        av: [Shruti.D2, Shruti.N2, Shruti.D2, Shruti.P, Shruti.R2],
      };
    case JanyaRaaga.Meghana:
      return {
        aa: [Shruti.M1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Mohanam:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Naadavalli:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Naagaswaraavali:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Naaraayanagowla:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N2, Shruti.D2, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
          Shruti.G3,
        ],
      };
    case JanyaRaaga.Naaraayani:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.NaattaiKurinji:
      return {
        aa: [
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.N2,
          Shruti.D2,
          Shruti.N2,
          Shruti.P,
          Shruti.D2,
          Shruti.N2,
        ],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.G3,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.NaattaiNaaraayani:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.D2, Shruti.N2, Shruti.D2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Nandhkowns:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.S,
          Shruti.G3,
        ],
      };
    case JanyaRaaga.Narani:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.NavarasaKalaanidhi:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.S, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.NavarasaKannada:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Neela:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Paarsi:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Parameshwarapriyaa:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Pashupathipriyaa:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.M1, Shruti.D2],
        av: [Shruti.D2, Shruti.M1, Shruti.P, Shruti.R2, Shruti.M1],
      };
    case JanyaRaaga.Poornakaambhoji:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.PrataapaNaattai:
      return {
        aa: [
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.D2,
          Shruti.P,
          Shruti.D2,
          Shruti.N3,
        ],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Prataapavaraali:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2, Shruti.P],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Pravalajyoti:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Raagapanjaramu:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Raagavinodini:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.D2],
        av: [Shruti.D2, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Raageshree:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.D2, Shruti.N3],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.RaviChandrikaa:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Saavithri:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Sahaana:
      return {
        aa: [
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.M1,
          Shruti.D2,
          Shruti.N2,
        ],
        av: [
          Shruti.N2,
          Shruti.S,
          Shruti.D2,
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.R2,
          Shruti.G3,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.SaraswathiManohari:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.D2],
        av: [Shruti.D2, Shruti.N2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Sathvamanjari:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.N2,
          Shruti.D2,
          Shruti.M1,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Shakunthala:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Shankaraharigowla:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N3],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Shenchukaambhoji:
      return {
        aa: [Shruti.P, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Chenjurutti: ///
      return {
        aa: [
          Shruti.D2,
          Shruti.S,
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.N2,
        ],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
          Shruti.S,
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.D2,
          Shruti.S,
        ],
      };
    case JanyaRaaga.ShivaKaambhoji:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Surutti:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N2, Shruti.D2, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.P,
          Shruti.M1,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Shyaamaa:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Simhavikrama:
      return {
        aa: [
          Shruti.R2,
          Shruti.G3,
          Shruti.R2,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.P,
          Shruti.N2,
        ],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.SindhuKannada:
      return {
        aa: [
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.P,
        ],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.SindhuSurutti:
      return {
        aa: [
          Shruti.R2,
          Shruti.M1,
          Shruti.P,
          Shruti.N2,
          Shruti.S,
          Shruti.S,
          Shruti.N2,
        ],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.R2,
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.SuddhaKhamaas:
      return {
        aa: [Shruti.M1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.SuddhaVaraali:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.D2, Shruti.N2],
        av: [Shruti.N2, Shruti.D2, Shruti.N2, Shruti.P, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Suddha:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Suddhatarangini:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Sumanapriyaa:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.P],
        av: [Shruti.D2, Shruti.S, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Suposhini:
      return {
        aa: [Shruti.R2, Shruti.S, Shruti.M1, Shruti.P, Shruti.N2, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.R2, Shruti.M1],
      };
    case JanyaRaaga.Suvarnakriyaa:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.P, Shruti.N2, Shruti.D2],
        av: [Shruti.N2, Shruti.P, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Swaraavali:
      return {
        aa: [
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.N2,
          Shruti.D2,
          Shruti.N2,
        ],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Swaravedi:
      return {
        aa: [
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.N2,
          Shruti.D2,
          Shruti.N2,
        ],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Tilakavathi:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.P],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Thilang:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N2, Shruti.P, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Umaabharanam:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.P,
          Shruti.M1,
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Vaishnavi:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Veenavadini:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.P, Shruti.N2],
        av: [Shruti.N2, Shruti.P, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Vivardhani:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.YadukulaKaambhoji:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };

    // Dheera Shankarābharanam
    case JanyaRaaga.Aanandharoopa:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.P, Shruti.D2, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Aarabhi:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Ataana:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N2],
        av: [
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G2,
          Shruti.M1,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Bangaala:
      return {
        aa: [
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.M1,
          Shruti.R2,
          Shruti.P,
        ],
        av: [
          Shruti.N3,
          Shruti.P,
          Shruti.M1,
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Begada:
      return {
        aa: [
          Shruti.G3,
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.P,
        ],
        av: [Shruti.N2, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Behaag:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.N3, Shruti.D2, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.BehaagDeshikam:
      return {
        aa: [
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.M2,
          Shruti.P,
          Shruti.D2,
          Shruti.N3,
        ],
        av: [
          Shruti.N3,
          Shruti.D2,
          Shruti.P,
          Shruti.M2,
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Bilahari:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.P, Shruti.D2],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Buddhamanohari:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.S, Shruti.P],
        av: [Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Buddharanjani:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P],
        av: [Shruti.N3, Shruti.P, Shruti.M1, Shruti.G3, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Chaayaa:
      return {
        aa: [
          Shruti.P,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.P,
          Shruti.N3,
          Shruti.R2,
        ],
        av: [
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.P,
          Shruti.G3,
          Shruti.M1,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Chaayashankaraabharanam:
      return {
        aa: [Shruti.R1, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R1],
      };
    case JanyaRaaga.Devagaandhaari:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Dharmalakhi:
      return {
        aa: [Shruti.M1, Shruti.P, Shruti.D2, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1],
      };
    case JanyaRaaga.Dhurvanki:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Gajagowri:
      return {
        aa: [
          Shruti.R2,
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.N3,
          Shruti.P,
          Shruti.D2,
        ],
        av: [
          Shruti.N3,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Garudadhvani:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N3],
        av: [Shruti.D2, Shruti.P, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Gowdamalhaar:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.N3, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Hamsadhwani:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.P, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Hamsavinodhini:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.D2, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Hemant: ///
      return {
        aa: [
          Shruti.N3,
          Shruti.S,
          Shruti.D2,
          Shruti.N3,
          Shruti.S,
          Shruti.G3,
          Shruti.G3,
          Shruti.M1,
          Shruti.D2,
          Shruti.N3,
        ],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.HindustaaniBehaag:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.JanaRanjani:
      return {
        aa: [
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.P,
          Shruti.N3,
        ],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Julavu: ///
      return {
        aa: [
          Shruti.P,
          Shruti.D2,
          Shruti.N3,
          Shruti.S,
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
        ],
        av: [
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
          Shruti.S,
          Shruti.N3,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
        ],
      };
    case JanyaRaaga.Kamaripriyaa:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.D2, Shruti.N3],
        av: [
          Shruti.N3,
          Shruti.D2,
          Shruti.M1,
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Kannada:
      return {
        aa: [
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.M1,
          Shruti.D2,
          Shruti.N3,
        ],
        av: [
          Shruti.N3,
          Shruti.S,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Kadanakuthoohalam:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.D2, Shruti.N3, Shruti.G3, Shruti.P],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Kedaram:
      return {
        aa: [Shruti.M1, Shruti.G3, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Kokilabhaashani:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N3],
        av: [Shruti.N3, Shruti.P, Shruti.M1, Shruti.G3, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Kolahalam:
      return {
        aa: [
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.N3,
        ],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Kurinji: ///
      return {
        aa: [
          Shruti.N3,
          Shruti.S,
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
        ],
        av: [
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
          Shruti.S,
          Shruti.N3,
          Shruti.S,
        ],
      };
    case JanyaRaaga.Kusumavichithra:
      return {
        aa: [
          Shruti.G3,
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.N3,
          Shruti.P,
          Shruti.D2,
          Shruti.N3,
        ],
        av: [
          Shruti.D2,
          Shruti.N3,
          Shruti.D2,
          Shruti.M1,
          Shruti.G3,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Kutuhala:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.N3, Shruti.D2, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Lahari:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Maand:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.D2, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Maayadravila:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N3],
        av: [
          Shruti.N2,
          Shruti.P,
          Shruti.M1,
          Shruti.P,
          Shruti.G3,
          Shruti.M1,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Mohanadhwani:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.P, Shruti.D2],
        av: [Shruti.N3, Shruti.P, Shruti.D2, Shruti.P, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Naagabhooshani:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N3],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Naagadhwani:
      return {
        aa: [
          Shruti.R2,
          Shruti.S,
          Shruti.M1,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.N3,
          Shruti.D2,
          Shruti.N3,
        ],
        av: [Shruti.N3, Shruti.D2, Shruti.N3, Shruti.P, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Naaraayanadeshaakshi:
      return {
        aa: [
          Shruti.R2,
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.N3,
        ],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Navaroj: ///
      return {
        aa: [
          Shruti.P,
          Shruti.D2,
          Shruti.N3,
          Shruti.S,
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
        ],
        av: [
          Shruti.M1,
          Shruti.G1,
          Shruti.R3,
          Shruti.S,
          Shruti.N2,
          Shruti.D2,
          Shruti.P,
        ],
      };
    case JanyaRaaga.Neelaambari:
      return {
        aa: [
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.P,
          Shruti.N3,
        ],
        av: [Shruti.N3, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2, Shruti.G3],
      };
    case JanyaRaaga.Niroshta:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.D2, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Pahaadi: ///
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.P, Shruti.D2, Shruti.P, Shruti.D2],
        av: [
          Shruti.N3,
          Shruti.D2,
          Shruti.P,
          Shruti.G3,
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
          Shruti.S,
          Shruti.N3,
          Shruti.D2,
          Shruti.P,
          Shruti.D2,
          Shruti.S,
        ],
      };
    case JanyaRaaga.Poornachandrika:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.P],
        av: [
          Shruti.N3,
          Shruti.P,
          Shruti.M1,
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Poornagowla:
      return {
        aa: [
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.N3,
          Shruti.D2,
          Shruti.N3,
          Shruti.P,
          Shruti.D2,
          Shruti.N3,
        ],
        av: [
          Shruti.N3,
          Shruti.D2,
          Shruti.N3,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Poorvagowla:
      return {
        aa: [
          Shruti.G3,
          Shruti.R2,
          Shruti.G3,
          Shruti.S,
          Shruti.R2,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.N3,
        ],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Rathnabhooshani:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P],
        av: [Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Reetuvilaasa:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.SaarangaMallaar:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N3],
        av: [
          Shruti.N3,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.R2,
          Shruti.S,
          Shruti.N3,
        ],
      };
    case JanyaRaaga.Shankara:
      return {
        aa: [Shruti.G3, Shruti.P],
        av: [
          Shruti.N3,
          Shruti.D2,
          Shruti.P,
          Shruti.G3,
          Shruti.P,
          Shruti.R2,
          Shruti.G3,
        ],
      };
    case JanyaRaaga.Shankaramohana:
      return {
        aa: [
          Shruti.R2,
          Shruti.G3,
          Shruti.P,
          Shruti.N3,
          Shruti.D2,
          Shruti.S,
          Shruti.N3,
        ],
        av: [Shruti.S, Shruti.D2, Shruti.P, Shruti.G3, Shruti.R2, Shruti.S],
      };
    case JanyaRaaga.Shankari:
      return {
        aa: [Shruti.G3, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.P, Shruti.G3],
      };
    case JanyaRaaga.Sindhu:
      return {
        aa: [Shruti.M1, Shruti.P, Shruti.D2],
        av: [
          Shruti.N3,
          Shruti.D2,
          Shruti.M1,
          Shruti.P,
          Shruti.M1,
          Shruti.G3,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.SindhuMandaari:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P],
        av: [
          Shruti.N3,
          Shruti.D2,
          Shruti.P,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.M1,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.SuddhaMaalavi:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.D2, Shruti.N3, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.SuddhaSaarang:
      return {
        aa: [
          Shruti.R2,
          Shruti.G3,
          Shruti.M1,
          Shruti.P,
          Shruti.D2,
          Shruti.N3,
          Shruti.D2,
        ],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.R2, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.SuddhaSaaveri:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.SuddhaVasantha:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.N3, Shruti.P, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Suranandini:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.P, Shruti.D2, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Suraranjani:
      return {
        aa: [Shruti.G3, Shruti.P, Shruti.R2, Shruti.M1, Shruti.D2],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Taandavam:
      return {
        aa: [Shruti.G3, Shruti.P, Shruti.D2, Shruti.N3],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.G3],
      };
    case JanyaRaaga.Vallabhi:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2, Shruti.N3],
        av: [
          Shruti.N3,
          Shruti.D2,
          Shruti.N3,
          Shruti.D2,
          Shruti.P,
          Shruti.M1,
          Shruti.P,
          Shruti.G3,
          Shruti.M1,
          Shruti.R2,
        ],
      };
    case JanyaRaaga.Vasanthamalai:
      return {
        aa: [Shruti.R2, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.D2, Shruti.P, Shruti.M1, Shruti.R2],
      };
    case JanyaRaaga.Vedhaandhagamana:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.P, Shruti.M1, Shruti.G3],
      };
    case JanyaRaaga.Veeraprataapa:
      return {
        aa: [Shruti.G3, Shruti.M1, Shruti.P, Shruti.D2],
        av: [Shruti.N3, Shruti.D2, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
    case JanyaRaaga.Vilaasini:
      return {
        aa: [Shruti.R2, Shruti.G3, Shruti.M1, Shruti.P, Shruti.N3],
        av: [Shruti.N3, Shruti.P, Shruti.M1, Shruti.G3, Shruti.R2],
      };
  }
}
