export function audioBlobToAudioBuffer(blob: Blob) {
  return new Promise<AudioBuffer>((res, rej) => {
    blob
      .arrayBuffer()
      .then(buffer => {
        const context = new AudioContext();
        context.decodeAudioData(
          buffer,
          audioBuffer => res(audioBuffer),
          err => rej(err),
        );
      })
      .catch(e => rej(e));
  });
}
