import { registerEnumType } from 'type-graphql';

import { ImageMimeType } from './index';

registerEnumType(ImageMimeType, {
  name: 'ImageMimeType',
  description: 'image mime types',
  valuesConfig: {
    Apng: {
      description: '.apng',
    },
    Gif: {
      description: '.gif, pronounced "gif"',
    },
    Jpeg: {
      description: '.jpeg / .jpg',
    },
    Png: {
      description: '.png',
    },
    Webp: {
      description: '.webp',
    },
  },
});

export { ImageMimeType };
