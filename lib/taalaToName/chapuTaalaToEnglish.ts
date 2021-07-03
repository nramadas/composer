import { ChapuTaala } from '#lib/models/Taala';

export function chapuTaalaToEnglish(taala: ChapuTaala) {
  switch (taala) {
    case ChapuTaala.MisraChapu:
      return 'Misra-chapu';
    case ChapuTaala.VilomaChapu:
      return 'Viloma-chapu';
    case ChapuTaala.KhandaChapu:
      return 'Khanda-chapu';
    case ChapuTaala.TisraChapu:
      return 'Tisra-chapu';
    case ChapuTaala.SankeernaChapu:
      return 'Sankeerna-chapu';
  }
}
