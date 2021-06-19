import { Subject } from 'rxjs';

export function playAudioBlob(blob: Blob) {
  const audioEl = document.createElement('audio');
  const currentTime = new Subject<number>();

  const ready = new Promise<void>(res => {
    audioEl.addEventListener('canplaythrough', () => res());
  });

  audioEl.ontimeupdate = () => {
    currentTime.next(audioEl.currentTime * 1000);
  };

  audioEl.src = URL.createObjectURL(blob);

  return {
    currentTime: currentTime.pipe(),
    pause: () => ready.then(() => audioEl.pause()),
    scrubTo: (time: number) =>
      ready.then(() => {
        audioEl.currentTime = time / 1000;
      }),
    start: () => ready.then(() => audioEl.play()),
    onComplete: (cb: (ev: Event) => void) => {
      audioEl.addEventListener('ended', cb);
    },
  };
}
