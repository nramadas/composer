export function getAudioBlobDuration(blob: Blob) {
  const audioEl = document.createElement('audio');

  return new Promise<number>((res, rej) => {
    audioEl.addEventListener('loadedmetadata', () => {
      if (audioEl.duration === Infinity) {
        audioEl.currentTime = Number.MAX_SAFE_INTEGER;
        audioEl.ontimeupdate = () => {
          audioEl.ontimeupdate = null;
          res(audioEl.duration * 1000);
          audioEl.currentTime = 0;
        };
      } else {
        res(audioEl.duration * 1000);
      }
    });

    audioEl.onerror = rej;

    audioEl.src = URL.createObjectURL(blob);
  });
}
