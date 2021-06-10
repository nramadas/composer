import { ImageMimeType } from '#lib/models/ImageMimeType';

export interface UploadedImage {
  filename: string;
  location: string;
  mimeType: ImageMimeType;
}
