import { DependencyList, useEffect, useState } from 'react';

import { ErrorType } from '#lib/errors';
import { createRecorder, MetaData, RecorderState } from '#lib/webAudioCapture';

interface State extends MetaData {
  error?: Error;
}

export function useWebAudioCapture(
  onRecordingCreated?: (recording: Blob) => void,
  depdencies?: DependencyList,
) {
  const [state, setState] = useState<State>({
    amplitude: 0,
    error: new Error(ErrorType.BrowserNotSupported),
    freqFreqDomain: [],
    freqTimeDomain: [],
    recorderState: RecorderState.Inactive,
    timeElapsed: 0,
  });
  const [pause, setPause] = useState(() => () => {});
  const [resume, setResume] = useState(() => () => {});
  const [start, setStart] = useState(() => () => {});
  const [stop, setStop] = useState(() => () => {});

  useEffect(() => {
    createRecorder()
      .then(recorder => {
        recorder.recordings.subscribe(onRecordingCreated);
        recorder.metaData.subscribe(data =>
          setState(() => ({ ...data, error: undefined })),
        );

        setState(state => ({ ...state, error: undefined }));
        setPause(() => recorder.pause.bind(recorder));
        setResume(() => recorder.resume.bind(recorder));
        setStart(() => recorder.start.bind(recorder));
        setStop(() => recorder.stop.bind(recorder));
      })
      .catch(e => {
        setState(state => ({ ...state, error: e }));
      });
  }, depdencies || []);

  return { ...state, pause, resume, start, stop };
}

export { RecorderState };
