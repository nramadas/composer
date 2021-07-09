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
  }
}
