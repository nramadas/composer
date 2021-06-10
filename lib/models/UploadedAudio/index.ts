import { AudioMimeType } from '#lib/models/AudioMimeType';

export interface UploadedAudio {
  filename: string;
  location: string;
  mimeType: AudioMimeType;
}
