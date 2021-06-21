/// <reference lib="webworker" />

interface Message {
  data: {
    rawChannel: Float32Array;
    samples: number;
  };
}

self.onmessage = async (message: Message) => {
  const { rawChannel, samples } = message.data;
  const blockSize = Math.floor(rawChannel.length / samples);
  const sampledData = Array.from({ length: samples }).map((_, i) => {
    return Array.from({ length: blockSize }).reduce((acc: number, _, j) => {
      const blockStart = i * blockSize;
      return acc + Math.abs(rawChannel[blockStart + j]);
    }, 0);
  });
  const multiplier = Math.pow(Math.max(...sampledData), -1);
  const waveform = sampledData.map(n => n * multiplier);
  self.postMessage({ waveform });
};

export default null;
