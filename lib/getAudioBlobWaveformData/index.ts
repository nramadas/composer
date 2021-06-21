import { audioBlobToAudioBuffer } from '#lib/audioBlobToAudioBuffer';
import { withLowPriority } from '#lib/withLowPriority';

import ComputeWorker from './compute.worker.ts';

interface Reply {
  data: {
    waveform: number[];
  };
}

export async function getAudioBlobWaveformData(blob: Blob, samples = 100) {
  const worker = new ComputeWorker();
  const audioBuffer = await withLowPriority(() => audioBlobToAudioBuffer(blob));
  const rawChannel = await withLowPriority(() => audioBuffer.getChannelData(0));

  return new Promise<number[]>((res, rej) => {
    worker.onmessage = (reply: Reply) => {
      res(reply.data.waveform);
    };

    worker.onerror = e => rej(e);

    worker.postMessage({ rawChannel, samples });
  });
}
