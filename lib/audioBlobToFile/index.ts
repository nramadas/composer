import { ulid } from 'ulid';

const generateFileName = () => `audio-${ulid()}.wav`;

export function audioBlobToFile(blob: Blob): File {
  return new File([blob], generateFileName(), {
    lastModified: Date.now(),
    type: blob.type,
  });
}
