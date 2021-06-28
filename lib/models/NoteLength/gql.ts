import { registerEnumType } from 'type-graphql';

import { NoteLength } from './index';

registerEnumType(NoteLength, {
  name: 'NoteLength',
  description: 'Note lengths',
  valuesConfig: {
    L1b12: {
      description: '1/12th',
    },
    L1b6: {
      description: '1/6th',
    },
    L1b4: {
      description: '1/4th',
    },
    L1b3: {
      description: '1/3rd',
    },
    L1b2: {
      description: '1/2f',
    },
    L1: {
      description: '1',
    },
    L2: {
      description: '2x',
    },
    L3: {
      description: '3x',
    },
    L4: {
      description: '4x',
    },
    L5: {
      description: '5x',
    },
    L6: {
      description: '6x',
    },
    L7: {
      description: '7x',
    },
    L8: {
      description: '8x',
    },
  },
});

export { NoteLength };
