import { registerEnumType } from 'type-graphql';

import { AudioMimeType } from './index';

registerEnumType(AudioMimeType, {
  name: 'AudioMimeType',
  description: 'audio mime types',
  valuesConfig: {
    Aac: {
      description: '.aac',
    },
    Flac: {
      description: '.flac',
    },
    Mpeg: {
      description: '.mp3, .mpeg',
    },
    Ogg: {
      description: '.ogg',
    },
    Opus: {
      description: '.???',
    },
  },
});

export { AudioMimeType };
