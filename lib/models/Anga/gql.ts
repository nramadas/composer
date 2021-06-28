import { registerEnumType } from 'type-graphql';

import { Anga } from './index';

registerEnumType(Anga, {
  name: 'Anga',
  description: 'Pitches',
  valuesConfig: {
    A1: {
      description: '1 beat (U)',
    },
    A2: {
      description: '2 beats (O)',
    },
    A3: {
      description: '3 beats (L3) - tisra laghu',
    },
    A4: {
      description: '4 beats (L4) - chatusra laghu',
    },
    A5: {
      description: '5 beats (L5) - khanda laghu',
    },
    A7: {
      description: '7 beats (L7) - misra laghu',
    },
    A9: {
      description: '9 beats (L9) - sankeerna laghu',
    },
  },
});

export { Anga };
