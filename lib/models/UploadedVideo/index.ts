import { VideoMimeType } from '#lib/models/VideoMimeType';

export interface UploadedVideo {
  filename: string;
  location: string;
  mimeType: VideoMimeType;
}
