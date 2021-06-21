import { DependencyList, useEffect, useState } from 'react';

import { ErrorType } from '#lib/errors';
import { createPlayer, MetaData, PlaybackState } from '#lib/webAudioPlayback';

interface State extends MetaData {
  error?: Error;
}

export function useWebAudioPlayer(depdencies?: DependencyList) {
  const [state, setState] = useState<State>({
    amplitude: 0,
    error: new Error(ErrorType.BrowserNotSupported),
    freqFreqDomain: [],
    freqTimeDomain: [],
    playbackPosition: {
      position: 0,
      total: 0,
    },
    playbackState: PlaybackState.Inactive,
    ready: false,
  });
  const [load, setload] = useState(() => (file: File) => {});
  const [pause, setPause] = useState(() => () => {});
  const [play, setPlay] = useState(() => () => {});
  const [resume, setResume] = useState(() => () => {});
  const [seekTo, setSeekTo] = useState(() => (pos: number) => {});
  const [stop, setStop] = useState(() => () => {});

  useEffect(() => {
    createPlayer()
      .then(player => {
        player.metaData.subscribe(data =>
          setState(() => ({ ...data, error: undefined })),
        );
        setState(state => ({ ...state, error: undefined }));
        setload(() => player.load.bind(player));
        setPause(() => player.pause.bind(player));
        setPlay(() => player.play.bind(player));
        setResume(() => player.resume.bind(player));
        setSeekTo(() => player.seekTo.bind(player));
        setStop(() => player.stop.bind(player));
      })
      .catch(e => {
        setState(state => ({ ...state, error: e }));
      });
  }, depdencies || []);

  return { ...state, load, pause, play, resume, seekTo, stop };
}

export { PlaybackState };
