import { Anga } from '#lib/models/Anga';
import { Taala } from '#lib/models/Taala';

export function taalaToAvartan(taala: Taala) {
  switch (taala) {
    case Taala.AtaChatusra:
      return [Anga.A4, Anga.A4, Anga.A2, Anga.A2];
    case Taala.AtaKhanda:
      return [Anga.A5, Anga.A5, Anga.A2, Anga.A2];
    case Taala.AtaMisra:
      return [Anga.A7, Anga.A7, Anga.A2, Anga.A2];
    case Taala.AtaSankeerna:
      return [Anga.A9, Anga.A9, Anga.A2, Anga.A2];
    case Taala.AtaTisra:
      return [Anga.A3, Anga.A3, Anga.A2, Anga.A2];
    case Taala.DhruvaChatusra:
      return [Anga.A4, Anga.A2, Anga.A4, Anga.A4];
    case Taala.DhruvaKhanda:
      return [Anga.A5, Anga.A2, Anga.A5, Anga.A5];
    case Taala.DhruvaMisra:
      return [Anga.A7, Anga.A2, Anga.A7, Anga.A7];
    case Taala.DhruvaSankeerna:
      return [Anga.A9, Anga.A2, Anga.A9, Anga.A9];
    case Taala.DhruvaTisra:
      return [Anga.A3, Anga.A2, Anga.A3, Anga.A3];
    case Taala.EkaChatusra:
      return [Anga.A4];
    case Taala.EkaKhanda:
      return [Anga.A5];
    case Taala.EkaMisra:
      return [Anga.A7];
    case Taala.EkaSankeerna:
      return [Anga.A9];
    case Taala.EkaTisra:
      return [Anga.A3];
    case Taala.JhampaChatusra:
      return [Anga.A4, Anga.A1, Anga.A2];
    case Taala.JhampaKhanda:
      return [Anga.A5, Anga.A1, Anga.A2];
    case Taala.JhampaMisra:
      return [Anga.A7, Anga.A1, Anga.A2];
    case Taala.JhampaSankeerna:
      return [Anga.A9, Anga.A1, Anga.A2];
    case Taala.JhampaTisra:
      return [Anga.A3, Anga.A1, Anga.A2];
    case Taala.KhandaChapu:
      return [Anga.A2, Anga.A3];
    case Taala.MatyaChatusra:
      return [Anga.A4, Anga.A2, Anga.A4];
    case Taala.MatyaKhanda:
      return [Anga.A5, Anga.A2, Anga.A5];
    case Taala.MatyaMisra:
      return [Anga.A7, Anga.A2, Anga.A7];
    case Taala.MatyaSankeerna:
      return [Anga.A9, Anga.A2, Anga.A9];
    case Taala.MatyaTisra:
      return [Anga.A3, Anga.A2, Anga.A3];
    case Taala.MisraChapu:
      return [Anga.A3, Anga.A4];
    case Taala.RupakaChatusra:
      return [Anga.A2, Anga.A4];
    case Taala.RupakaKhanda:
      return [Anga.A2, Anga.A5];
    case Taala.RupakaMisra:
      return [Anga.A2, Anga.A7];
    case Taala.RupakaSankeerna:
      return [Anga.A2, Anga.A9];
    case Taala.RupakaTisra:
      return [Anga.A2, Anga.A3];
    case Taala.SankeernaChapu:
      return [Anga.A4, Anga.A5];
    case Taala.TisraChapu:
      return [Anga.A3];
    case Taala.TriputaChatusra:
      return [Anga.A4, Anga.A2, Anga.A2];
    case Taala.TriputaKhanda:
      return [Anga.A5, Anga.A2, Anga.A2];
    case Taala.TriputaMisra:
      return [Anga.A7, Anga.A2, Anga.A2];
    case Taala.TriputaSankeerna:
      return [Anga.A9, Anga.A2, Anga.A2];
    case Taala.TriputaTisra:
      return [Anga.A3, Anga.A2, Anga.A2];
    case Taala.VilomaChapu:
      return [Anga.A4, Anga.A3];
  }
}
