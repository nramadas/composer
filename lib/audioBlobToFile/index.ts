import { ulid } from 'ulid';

const generateFileName = (ext: string) => `audio-${ulid()}.${ext}`;

export function audioBlobToFile(blob: Blob): File {
  const ext = blob.type.includes('webm')
    ? 'webm'
    : blob.type.includes('ogg')
    ? 'ogg'
    : 'audio';

  return new File([blob], generateFileName(ext), {
    lastModified: Date.now(),
    type: blob.type,
  });
}
