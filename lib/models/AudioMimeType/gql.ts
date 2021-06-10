import { registerEnumType } from 'type-graphql';

import { AudioMimeType } from './index';

registerEnumType(AudioMimeType, {
  name: 'AudioMimeType',
  description: 'audio mime types',
  valuesConfig: {
    Flac: {
      description: '.flac',
    },
    Mp3: {
      description: '.mp3',
    },
    Ogg: {
      description: '.ogg',
    },
  },
});

export { AudioMimeType };
