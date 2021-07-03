import { registerEnumType } from 'type-graphql';

import { ChapuTaala, SuladiSaptaTaala } from './index';

registerEnumType(ChapuTaala, {
  name: 'ChapuTaala',
  description: 'Chaput taalas',
  valuesConfig: {
    MisraChapu: {
      description: '3 + 4',
    },
    VilomaChapu: {
      description: '4 + 3',
    },
    KhandaChapu: {
      description: '2 + 3',
    },
    TisraChapu: {
      description: '3',
    },
    SankeernaChapu: {
      description: '4 + 5',
    },
  },
});

registerEnumType(SuladiSaptaTaala, {
  name: 'SuladiSaptaTaala',
  description: 'Suladi sapta taalas',
  valuesConfig: {
    DhruvaTisra: {
      description: '3 + 2 + 3 + 3',
    },
    DhruvaChatusra: {
      description: '4 + 2 + 4 + 4',
    },
    DhruvaKhanda: {
      description: '5 + 2 + 5 + 5',
    },
    DhruvaMisra: {
      description: '7 + 2 + 7 + 7',
    },
    DhruvaSankeerna: {
      description: '9 + 2 + 9 + 9',
    },
    MatyaTisra: {
      description: '3 + 2 + 3',
    },
    MatyaChatusra: {
      description: '4 + 2 + 4',
    },
    MatyaKhanda: {
      description: '5 + 2 + 5',
    },
    MatyaMisra: {
      description: '7 + 2 + 7',
    },
    MatyaSankeerna: {
      description: '9 + 2 + 9',
    },
    RupakaTisra: {
      description: '2 + 3',
    },
    RupakaChatusra: {
      description: '2 + 4',
    },
    RupakaKhanda: {
      description: '2 + 5',
    },
    RupakaMisra: {
      description: '2 + 7',
    },
    RupakaSankeerna: {
      description: '2 + 9',
    },
    JhampaTisra: {
      description: '3 + 1 + 2',
    },
    JhampaChatusra: {
      description: '4 + 1 + 2',
    },
    JhampaKhanda: {
      description: '5 + 1 + 2',
    },
    JhampaMisra: {
      description: '7 + 1 + 2',
    },
    JhampaSankeerna: {
      description: '9 + 1 + 2',
    },
    TriputaTisra: {
      description: '3 + 2 + 2',
    },
    TriputaChatusra: {
      description: '4 + 2 + 2',
    },
    TriputaKhanda: {
      description: '5 + 2 + 2',
    },
    TriputaMisra: {
      description: '7 + 2 + 2',
    },
    TriputaSankeerna: {
      description: '9 + 2 + 2',
    },
    AtaTisra: {
      description: '3 + 3 + 2 + 2',
    },
    AtaChatusra: {
      description: '4 + 4 + 2 + 2',
    },
    AtaKhanda: {
      description: '5 + 5 + 2 + 2',
    },
    AtaMisra: {
      description: '7 + 7 + 2 + 2',
    },
    AtaSankeerna: {
      description: '9 + 9 + 2 + 2',
    },
    EkaTisra: {
      description: '3',
    },
    EkaChatusra: {
      description: '4',
    },
    EkaKhanda: {
      description: '5',
    },
    EkaMisra: {
      description: '7',
    },
    EkaSankeerna: {
      description: '9',
    },
  },
});

export { ChapuTaala, SuladiSaptaTaala };
