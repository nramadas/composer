import { audioBlobToAudioBuffer } from '#lib/audioBlobToAudioBuffer';

export async function getAudioBlobWaveformData(blob: Blob, samples = 100) {
  const audioBuffer = await audioBlobToAudioBuffer(blob);
  const rawChannel = audioBuffer.getChannelData(0);
  const blockSize = Math.floor(rawChannel.length / samples);
  const sampledData = Array.from({ length: samples }).map((_, i) => {
    return Array.from({ length: blockSize }).reduce((acc: number, _, j) => {
      const blockStart = i * blockSize;
      return acc + Math.abs(rawChannel[blockStart + j]);
    }, 0);
  });
  const multiplier = Math.pow(Math.max(...sampledData), -1);
  return sampledData.map(n => n * multiplier);
}
