import { registerEnumType } from 'type-graphql';

import { Language } from './index';

registerEnumType(Language, {
  name: 'Language',
  description: 'Supported languages',
  valuesConfig: {
    en: {
      description: 'The english language',
    },
  },
});

export { Language };
