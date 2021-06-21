import cx from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';

import { AudioVisualizationCircle } from '#components/eyecandy/AudioVisualizationCircle';
import { audioBlobToFile } from '#lib/audioBlobToFile';
import { getAudioBlobDuration } from '#lib/getAudioBlobDuration';
import { getAudioBlobWaveformData } from '#lib/getAudioBlobWaveformData';
import {
  useWebAudioCapture,
  RecorderState,
} from '#lib/hooks/useWebAudioCapture';

import { Footer } from './Footer';
import styles from './index.module.scss';
import { ProcessingCover } from './ProcessingCover';
import { PlaybackState, Tracks, TrackModel } from './Tracks';

interface Props {
  className?: string;
  header?: React.ReactNode;
  preserveSelection?: boolean;
  onRecordingCreated?(recording: File): void;
}

export function AudioRecorder(props: Props) {
  const [expandedTrack, setExpandedTrack] = useState<TrackModel | undefined>(
    undefined,
  );
  const [tracks, setTracks] = useState<TrackModel[]>([]);
  const [processing, setProcessing] = useState(false);
  const [playbackState, setPlaybackState] = useState(PlaybackState.Inactive);

  const addTrack = useCallback(
    async (blob: Blob) => {
      try {
        const [waveform, duration] = await Promise.all([
          getAudioBlobWaveformData(blob, 67),
          getAudioBlobDuration(blob),
        ]);

        setTracks(tracks =>
          tracks.concat({
            blob,
            duration,
            waveform,
            name: `Track ${tracks.length + 1}`,
          }),
        );
      } catch (e) {
        console.log(e);
      }

      setProcessing(false);
    },
    [setTracks],
  );

  useEffect(() => {
    function closeExpandedTack() {
      setExpandedTrack(undefined);

      if (playbackState !== PlaybackState.Playing) {
        setPlaybackState(PlaybackState.Inactive);
      }
    }

    if (
      typeof window !== undefined &&
      expandedTrack &&
      !props.preserveSelection
    ) {
      document.body.addEventListener('click', closeExpandedTack);
    }

    return () => {
      if (typeof window !== undefined) {
        document.body.removeEventListener('click', closeExpandedTack);
      }
    };
  }, [expandedTrack, props.preserveSelection, setExpandedTrack]);

  const {
    amplitude,
    error,
    freqFreqDomain,
    recorderState,
    timeElapsed,
    pause,
    resume,
    start,
    stop,
  } = useWebAudioCapture(addTrack);

  const displayTrackList =
    !!tracks.length && !processing && recorderState === RecorderState.Inactive;

  const displayVisualizations = !displayTrackList && !processing;

  return (
    <article className={cx(props.className, styles.container)}>
      {props.header && <header>{props.header}</header>}
      <div className={styles.content}>
        <Tracks
          className={cx(styles.tracks, {
            [styles.visible]: displayTrackList,
          })}
          expanded={expandedTrack}
          playbackState={playbackState}
          selected={props.preserveSelection ? expandedTrack : undefined}
          tracks={tracks}
          visible={displayTrackList}
          onExpand={track => {
            setExpandedTrack(track);
            setPlaybackState(PlaybackState.Inactive);
          }}
          onSelect={track =>
            props.onRecordingCreated?.(audioBlobToFile(track.blob))
          }
          onSetPlaybackState={setPlaybackState}
        />
        <AudioVisualizationCircle
          amplitude={amplitude}
          className={cx(styles.visuals, {
            [styles.visible]: displayVisualizations,
          })}
          frequencies={freqFreqDomain}
          paused={recorderState === RecorderState.Paused}
          timeElapsed={timeElapsed}
          visible={displayVisualizations}
        />
        <ProcessingCover
          className={cx(styles.processingCover, {
            [styles.visible]: processing,
          })}
        />
        {props.preserveSelection && <div className={styles.contentCover} />}
      </div>
      <Footer
        disabled={!!error || processing || props.preserveSelection}
        playing={playbackState === PlaybackState.Playing}
        playbackEnabled={!!expandedTrack}
        recorderState={recorderState}
        onPlay={() => {
          if (expandedTrack) {
            setPlaybackState(PlaybackState.Playing);
          }
        }}
        onPause={() => {
          if (expandedTrack) {
            setPlaybackState(PlaybackState.Paused);
          } else {
            pause();
          }
        }}
        onResume={resume}
        onStart={start}
        onStop={() => {
          if (expandedTrack) {
            if (playbackState === PlaybackState.Playing) {
              setPlaybackState(PlaybackState.Inactive);
            }
          } else {
            setProcessing(true);
            setTimeout(() => stop());
          }
        }}
      />
    </article>
  );
}
