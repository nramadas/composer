import { AudioMimeType } from '#lib/models/AudioMimeType';
import { ImageMimeType } from '#lib/models/ImageMimeType';
import { VideoMimeType } from '#lib/models/VideoMimeType';

export const audioExtToMimeType = (ext: string) => {
  switch (ext) {
    case 'flac':
      return AudioMimeType.Flac;
    case 'mp3':
      return AudioMimeType.Mp3;
    case 'ogg':
      return AudioMimeType.Ogg;
    default:
      return null;
  }
};

export const imageExtToMimeType = (ext: string) => {
  switch (ext) {
    case 'apng':
      return ImageMimeType.Apng;
    case 'gif':
      return ImageMimeType.Gif;
    case 'jpg':
      return ImageMimeType.Jpeg;
    case 'png':
      return ImageMimeType.Png;
    case 'webp':
      return ImageMimeType.Webp;
    default:
      return null;
  }
};

export const videoExtToMimeType = (ext: string) => {
  switch (ext) {
    case 'mp4':
      return VideoMimeType.Mp4;
    case 'mpg':
      return VideoMimeType.Mpg;
    case 'webm':
      return VideoMimeType.Webm;
    default:
      return null;
  }
};
