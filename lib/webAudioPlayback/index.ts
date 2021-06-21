import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ErrorType } from '#lib/errors';
import { fileToDataUrl } from '#lib/fileToDataUrl';
import { getAudioBlobDuration } from '#lib/getAudioBlobDuration';

const NUM_FREQ_COLLAPSE = 4;
const TIME_SLICE = 16;

export enum PlaybackState {
  Inactive = 'Inactive',
  Paused = 'Paused',
  Playing = 'Playing',
}

interface PlaybackPosition {
  position: number;
  total: number;
}

export interface MetaData {
  amplitude: number;
  freqFreqDomain: number[];
  freqTimeDomain: number[];
  playbackPosition: PlaybackPosition;
  playbackState: PlaybackState;
  ready: boolean;
}

export interface Player {
  metaData: Observable<MetaData>;
  load: (file: File) => void;
  pause: () => void;
  play: () => void;
  resume: () => void;
  seekTo: (pos: number) => void;
  stop: () => void;
}

export function createPlayer() {
  return new Promise<Player>((res, rej) => {
    if (typeof window === undefined || typeof AudioContext === undefined) {
      return rej(new Error(ErrorType.BrowserNotSupported));
    }

    const context = new AudioContext();

    if (
      typeof context.createMediaElementSource === undefined ||
      typeof context.createMediaStreamDestination === undefined
    ) {
      return rej(new Error(ErrorType.BrowserNotSupported));
    }

    const audio = new Audio();
    const raw = new Subject();
    const source = context.createMediaElementSource(audio);
    const analyzer = context.createAnalyser();
    analyzer.fftSize = 2048;

    const timeDomain = new Float32Array(analyzer.fftSize);
    const freqDomain = new Uint8Array(analyzer.frequencyBinCount);

    source.connect(analyzer);
    source.connect(context.destination);

    let playbackState = PlaybackState.Playing;
    let ready = false;
    let totalDuration = 0;
    let timer: number | undefined = undefined;

    audio.addEventListener('canplaythrough', () => {
      ready = true;
      raw.next();
    });

    audio.addEventListener('ended', () => {
      playbackState = PlaybackState.Inactive;
      audio.load();
      raw.next();
    });

    audio.addEventListener('play', () => {
      timer = setInterval(() => raw.next(), TIME_SLICE);
    });

    audio.addEventListener('pause', () => {
      clearInterval(timer);
    });

    const metaData = raw.pipe(
      map(() => {
        analyzer.getFloatTimeDomainData(timeDomain);
        analyzer.getByteFrequencyData(freqDomain);

        // calculate amplitude
        const sumSquares = timeDomain.reduce(
          (acc, f) => acc + Math.pow(f, 2),
          0.0,
        );
        const amplitude =
          playbackState === PlaybackState.Playing
            ? Math.sqrt(sumSquares / timeDomain.length)
            : 0;

        // calculuate frequencies over the time domain
        const freqTimeDomain: number[] = [];

        if (playbackState === PlaybackState.Playing) {
          let curSum = 0;
          timeDomain.forEach((freq, i) => {
            curSum += freq / 256;
            if (i % NUM_FREQ_COLLAPSE === NUM_FREQ_COLLAPSE - 1) {
              freqTimeDomain.push(curSum / NUM_FREQ_COLLAPSE);
              curSum = 0;
            }
          });
        }

        // calculate frequencies over the frequency domain
        const freqFreqDomain: number[] = [];

        if (playbackState === PlaybackState.Playing) {
          let curSum = 0;
          freqDomain.forEach((freq, i) => {
            curSum += freq / 256;
            if (i % NUM_FREQ_COLLAPSE === NUM_FREQ_COLLAPSE - 1) {
              freqFreqDomain.push(curSum / NUM_FREQ_COLLAPSE);
              curSum = 0;
            }
          });
        }

        return {
          amplitude,
          freqFreqDomain,
          freqTimeDomain,
          playbackState,
          ready,
          playbackPosition: {
            position: audio.currentTime * 1000,
            total: totalDuration,
          },
        };
      }),
    );

    const load = async (file: File) => {
      ready = false;
      playbackState = PlaybackState.Inactive;
      raw.next();
      let src;
      try {
        [src, totalDuration] = await Promise.all([
          fileToDataUrl(file),
          getAudioBlobDuration(file),
        ]);
        audio.currentTime = 0;
        audio.src = src;
        audio.volume = 0.5;
        audio.muted = false;
      } catch (e) {
        console.log('ee', e);
      }
    };

    const pause = () => {
      playbackState = PlaybackState.Paused;
      audio.pause();
      raw.next();
    };

    const play = () => {
      playbackState = PlaybackState.Playing;
      audio.play().catch(() => {});
      raw.next();
    };

    const resume = () => {
      playbackState = PlaybackState.Playing;
      audio.play();
      raw.next();
    };

    const seekTo = (pos: number) => {
      audio.currentTime = pos / 1000;
      raw.next();
    };

    const stop = () => {
      playbackState = PlaybackState.Inactive;
      audio.load();
      raw.next();
    };

    return res({
      metaData,
      load,
      pause,
      play,
      resume,
      seekTo,
      stop,
    });
  });
}
