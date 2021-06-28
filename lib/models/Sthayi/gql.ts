import { registerEnumType } from 'type-graphql';

import { Sthayi } from './index';

registerEnumType(Sthayi, {
  name: 'Sthayi',
  description: 'Octaves',
  valuesConfig: {
    Sub2: {
      description: 'anumandra sthayi',
    },
    Sub1: {
      description: 'mandra sthayi',
    },
    Mid: {
      description: 'madhya sthayi',
    },
    Up1: {
      description: 'tara sthayi',
    },
    Up2: {
      description: 'athithara sthayi',
    },
  },
});

export { Sthayi };
