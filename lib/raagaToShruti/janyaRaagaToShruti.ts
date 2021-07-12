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
  }
}
