import cx from 'classnames';
import React, { useState } from 'react';

import { AudioVisualizationCircle } from '#components/eyecandy/AudioVisualizationCircle';
import { useWebAudioPlayer, PlaybackState } from '#lib/hooks/useWebAudioPlayer';

import { Footer } from './Footer';
import styles from './index.module.scss';
import { Upload } from './Upload';
import { Waveform } from './Waveform';

interface Props {
  className?: string;
  header?: React.ReactNode;
  onChange?(file: File | null): void;
}

export function AudioUploader(props: Props) {
  const {
    amplitude,
    error,
    freqFreqDomain,
    playbackPosition,
    playbackState,
    ready,
    load,
    pause,
    play,
    resume,
    seekTo,
    stop,
  } = useWebAudioPlayer();
  const [file, setFile] = useState<File | null>(null);

  const showVisualization = ready && !!file;

  return (
    <article className={cx(props.className, styles.container)}>
      {props.header && <header>{props.header}</header>}
      <div className={styles.content}>
        <AudioVisualizationCircle
          amplitude={amplitude}
          className={cx(styles.visuals, {
            [styles.visible]: showVisualization,
          })}
          frequencies={freqFreqDomain}
          paused={playbackState === PlaybackState.Paused}
          timeElapsed={playbackPosition.position}
          totalTime={playbackPosition.total}
          visible={showVisualization}
        />
        <Upload
          className={cx(styles.upload, {
            [styles.visible]: !showVisualization,
          })}
          visible={!showVisualization}
          onChange={file => {
            if (file) {
              load(file);
              setFile(file);
              props.onChange?.(file);
            }
          }}
        />
        <Waveform
          className={cx(styles.waveform, {
            [styles.visible]: showVisualization,
          })}
          file={file}
          playbackPercentage={
            file
              ? (100 * playbackPosition.position) / playbackPosition.total
              : 0
          }
          onSeekTo={decimal => seekTo(decimal * playbackPosition.total)}
        />
      </div>
      <Footer
        disabled={!!error || !file}
        playbackState={playbackState}
        onDelete={() => {
          setFile(null);
          props.onChange?.(file);
        }}
        onPause={pause}
        onPlay={play}
        onResume={resume}
        onStop={stop}
      />
    </article>
  );
}
