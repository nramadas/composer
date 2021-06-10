import { registerEnumType } from 'type-graphql';

import { SortOrder } from './index';

registerEnumType(SortOrder, {
  name: 'SortOrder',
  description: 'How content should be sorted',
  valuesConfig: {
    Oldest: {
      description: 'Show older content first',
    },
    Newest: {
      description: 'Show newer content first',
    },
  },
});

export { SortOrder };
