import { registerEnumType } from 'type-graphql';

import { VideoMimeType } from './index';

registerEnumType(VideoMimeType, {
  name: 'VideoMimeType',
  description: 'video mime types',
  valuesConfig: {
    Mp4: {
      description: '.mp4',
    },
    Mpg: {
      description: '.mpg',
    },
    Webm: {
      description: '.webm',
    },
  },
});

export { VideoMimeType };
