import { audioBlobToAudioBuffer } from '#lib/audioBlobToAudioBuffer';

import ComputeWorker from './compute.worker.ts';

interface Reply {
  data: {
    waveform: number[];
  };
}

export async function getAudioBlobWaveformData(blob: Blob, samples = 100) {
  const worker = new ComputeWorker();
  const audioBuffer = await audioBlobToAudioBuffer(blob);
  const rawChannel = audioBuffer.getChannelData(0);

  return new Promise<number[]>((res, rej) => {
    worker.onmessage = (reply: Reply) => {
      res(reply.data.waveform);
    };

    worker.onerror = e => rej(e);

    worker.postMessage({ rawChannel, samples });
  });
}
