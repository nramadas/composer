import { registerEnumType } from 'type-graphql';

import { CursorStrategy } from './index';

registerEnumType(CursorStrategy, {
  name: 'CursorStrategy',
  description: 'Which property should be used to sort',
  valuesConfig: {
    ByCreated: {
      description: 'Use the "created" timestamp to sort',
    },
    ByUpdated: {
      description: 'Use the "updated" timestamp to sort',
    },
  },
});

export { CursorStrategy };
