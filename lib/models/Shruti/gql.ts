import { registerEnumType } from 'type-graphql';

import { Shruti } from './index';

registerEnumType(Shruti, {
  name: 'Shruti',
  description: 'Pitches',
  valuesConfig: {
    S: {
      description: 'shadja',
    },
    R1: {
      description: 'shuddha ri',
    },
    R2: {
      description: 'chatushruti ri',
    },
    R3: {
      description: 'shatshruti ri',
    },
    G1: {
      description: 'shuddha gā',
    },
    G2: {
      description: 'sadharana gā',
    },
    G3: {
      description: 'antara gā',
    },
    M1: {
      description: 'shuddha ma',
    },
    M2: {
      description: 'prati ma',
    },
    P: {
      description: 'pañchama',
    },
    D1: {
      description: 'shuddha dha',
    },
    D2: {
      description: 'chatushruti dha',
    },
    D3: {
      description: 'shatshruti dha',
    },
    N1: {
      description: 'shuddha ni',
    },
    N2: {
      description: 'kaishiki ni',
    },
    N3: {
      description: 'kakali ni',
    },
  },
});

export { Shruti };
