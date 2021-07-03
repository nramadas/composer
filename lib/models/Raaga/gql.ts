import { registerEnumType } from 'type-graphql';

import { JanyaRaaga, MelakartaRaaga } from './index';

registerEnumType(JanyaRaaga, {
  name: 'JanyaRaaga',
  description: 'Janya raagas',
});

registerEnumType(MelakartaRaaga, {
  name: 'MelakartaRaaga',
  description: 'Melakarta raagas',
});

export { JanyaRaaga, MelakartaRaaga };
