import RecordRTC from 'recordrtc';
import { from, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ErrorType } from '#lib/errors';

const NUM_FREQ_COLLAPSE = 4;
const TIME_SLICE = 16;

export enum RecorderState {
  Inactive = 'Inactive',
  Paused = 'Paused',
  Recording = 'Recording',
}

export interface MetaData {
  amplitude: number;
  freqFreqDomain: number[];
  freqTimeDomain: number[];
  recorderState: RecorderState;
  timeElapsed: number;
}

export interface Recorder {
  metaData: Observable<MetaData>;
  recordings: Observable<Blob>;
  pause: () => void;
  resume: () => void;
  start: () => void;
  stop: () => void;
}

export function createRecorder() {
  return new Promise<Recorder>((res, rej) => {
    if (
      typeof window === undefined ||
      typeof window.navigator?.getUserMedia === undefined ||
      typeof AudioContext === undefined ||
      typeof MediaRecorder === undefined ||
      typeof performance === undefined
    ) {
      return rej(new Error(ErrorType.BrowserNotSupported));
    }

    const context = new AudioContext();

    if (
      typeof context.createMediaStreamSource === undefined ||
      typeof context.createMediaStreamDestination === undefined ||
      typeof context.createScriptProcessor === undefined
    ) {
      return rej(new Error(ErrorType.BrowserNotSupported));
    }

    window.navigator.getUserMedia(
      { audio: { echoCancellation: true } },
      rawStream => {
        const analyzer = context.createAnalyser();
        analyzer.fftSize = 2048;

        const destination = context.createMediaStreamDestination();
        const timeDomain = new Float32Array(analyzer.fftSize);
        const freqDomain = new Uint8Array(analyzer.frequencyBinCount);

        const raw = new Subject();
        const recordings = new Subject<Blob>();

        let currentLength = 0;
        let currentTimestamp: number | undefined = undefined;
        let recorderState = RecorderState.Inactive;

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
              recorderState === RecorderState.Recording
                ? Math.sqrt(sumSquares / timeDomain.length)
                : 0;

            // calculuate frequencies over the time domain
            const freqTimeDomain: number[] = [];

            if (recorderState === RecorderState.Recording) {
              for (const freq of timeDomain) {
                freqTimeDomain.push(freq / 256);
              }
            }

            // calculate frequencies over the frequency domain
            const freqFreqDomain: number[] = [];

            if (recorderState === RecorderState.Recording) {
              let curSum = 0;
              freqDomain.forEach((freq, i) => {
                curSum += freq / 256;
                if (i % NUM_FREQ_COLLAPSE === NUM_FREQ_COLLAPSE - 1) {
                  freqFreqDomain.push(curSum / NUM_FREQ_COLLAPSE);
                  curSum = 0;
                }
              });
            }

            // calculate time elapsed
            if (recorderState === RecorderState.Recording) {
              const newTimestamp = performance.now();
              const additionalLength = currentTimestamp
                ? newTimestamp - currentTimestamp
                : 0;
              currentLength += additionalLength;
              currentTimestamp = newTimestamp;
            }

            return {
              amplitude,
              freqFreqDomain,
              freqTimeDomain,
              recorderState,
              timeElapsed: currentLength,
            };
          }),
        );

        const source = context.createMediaStreamSource(rawStream);

        source.connect(analyzer);
        source.connect(destination);

        const mediaRecorder = new RecordRTC(rawStream, {
          disableLogs: true,
          mimeType: 'audio/webm;codecs=pcm',
          timeSlice: TIME_SLICE,
          ondataavailable: data => {
            if (data.size > 0) {
              raw.next();
            }
          },
        });

        const start = () => {
          recorderState = RecorderState.Recording;
          mediaRecorder.startRecording();
          raw.next();
        };

        const stop = () => {
          recorderState = RecorderState.Inactive;
          currentTimestamp = undefined;
          currentLength = 0;
          mediaRecorder.stopRecording(() => {
            raw.next();
            recordings.next(mediaRecorder.getBlob());
            mediaRecorder.reset();
          });
        };

        const pause = () => {
          mediaRecorder.pauseRecording();
          recorderState = RecorderState.Paused;
          currentTimestamp = undefined;
          raw.next();
        };

        const resume = () => {
          recorderState = RecorderState.Recording;
          mediaRecorder.resumeRecording();
          raw.next();
        };

        return res({
          metaData,
          pause,
          resume,
          start,
          stop,
          recordings: from(recordings),
        });
      },
      () => {
        return rej(new Error(ErrorType.Unauthorized));
      },
    );
  });
}
