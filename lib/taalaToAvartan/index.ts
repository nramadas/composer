import { Anga } from '#lib/models/Anga';
import { ChapuTaala, SuladiSaptaTaala } from '#lib/models/Taala';

export function taalaToAvartan(taala: ChapuTaala | SuladiSaptaTaala) {
  switch (taala) {
    case SuladiSaptaTaala.AtaChatusra:
      return [Anga.A4, Anga.A4, Anga.A2, Anga.A2];
    case SuladiSaptaTaala.AtaKhanda:
      return [Anga.A5, Anga.A5, Anga.A2, Anga.A2];
    case SuladiSaptaTaala.AtaMisra:
      return [Anga.A7, Anga.A7, Anga.A2, Anga.A2];
    case SuladiSaptaTaala.AtaSankeerna:
      return [Anga.A9, Anga.A9, Anga.A2, Anga.A2];
    case SuladiSaptaTaala.AtaTisra:
      return [Anga.A3, Anga.A3, Anga.A2, Anga.A2];
    case SuladiSaptaTaala.DhruvaChatusra:
      return [Anga.A4, Anga.A2, Anga.A4, Anga.A4];
    case SuladiSaptaTaala.DhruvaKhanda:
      return [Anga.A5, Anga.A2, Anga.A5, Anga.A5];
    case SuladiSaptaTaala.DhruvaMisra:
      return [Anga.A7, Anga.A2, Anga.A7, Anga.A7];
    case SuladiSaptaTaala.DhruvaSankeerna:
      return [Anga.A9, Anga.A2, Anga.A9, Anga.A9];
    case SuladiSaptaTaala.DhruvaTisra:
      return [Anga.A3, Anga.A2, Anga.A3, Anga.A3];
    case SuladiSaptaTaala.EkaChatusra:
      return [Anga.A4];
    case SuladiSaptaTaala.EkaKhanda:
      return [Anga.A5];
    case SuladiSaptaTaala.EkaMisra:
      return [Anga.A7];
    case SuladiSaptaTaala.EkaSankeerna:
      return [Anga.A9];
    case SuladiSaptaTaala.EkaTisra:
      return [Anga.A3];
    case SuladiSaptaTaala.JhampaChatusra:
      return [Anga.A4, Anga.A1, Anga.A2];
    case SuladiSaptaTaala.JhampaKhanda:
      return [Anga.A5, Anga.A1, Anga.A2];
    case SuladiSaptaTaala.JhampaMisra:
      return [Anga.A7, Anga.A1, Anga.A2];
    case SuladiSaptaTaala.JhampaSankeerna:
      return [Anga.A9, Anga.A1, Anga.A2];
    case SuladiSaptaTaala.JhampaTisra:
      return [Anga.A3, Anga.A1, Anga.A2];
    case SuladiSaptaTaala.MatyaChatusra:
      return [Anga.A4, Anga.A2, Anga.A4];
    case SuladiSaptaTaala.MatyaKhanda:
      return [Anga.A5, Anga.A2, Anga.A5];
    case SuladiSaptaTaala.MatyaMisra:
      return [Anga.A7, Anga.A2, Anga.A7];
    case SuladiSaptaTaala.MatyaSankeerna:
      return [Anga.A9, Anga.A2, Anga.A9];
    case SuladiSaptaTaala.MatyaTisra:
      return [Anga.A3, Anga.A2, Anga.A3];
    case SuladiSaptaTaala.RupakaChatusra:
      return [Anga.A2, Anga.A4];
    case SuladiSaptaTaala.RupakaKhanda:
      return [Anga.A2, Anga.A5];
    case SuladiSaptaTaala.RupakaMisra:
      return [Anga.A2, Anga.A7];
    case SuladiSaptaTaala.RupakaSankeerna:
      return [Anga.A2, Anga.A9];
    case SuladiSaptaTaala.RupakaTisra:
      return [Anga.A2, Anga.A3];
    case SuladiSaptaTaala.TriputaChatusra:
      return [Anga.A4, Anga.A2, Anga.A2];
    case SuladiSaptaTaala.TriputaKhanda:
      return [Anga.A5, Anga.A2, Anga.A2];
    case SuladiSaptaTaala.TriputaMisra:
      return [Anga.A7, Anga.A2, Anga.A2];
    case SuladiSaptaTaala.TriputaSankeerna:
      return [Anga.A9, Anga.A2, Anga.A2];
    case SuladiSaptaTaala.TriputaTisra:
      return [Anga.A3, Anga.A2, Anga.A2];
    case ChapuTaala.KhandaChapu:
      return [Anga.A2, Anga.A3];
    case ChapuTaala.MisraChapu:
      return [Anga.A3, Anga.A4];
    case ChapuTaala.SankeernaChapu:
      return [Anga.A4, Anga.A5];
    case ChapuTaala.TisraChapu:
      return [Anga.A3];
    case ChapuTaala.VilomaChapu:
      return [Anga.A4, Anga.A3];
  }
}
