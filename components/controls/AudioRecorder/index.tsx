import cx from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';

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
import { Visualization } from './Visualization';

interface Props {
  className?: string;
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
          getAudioBlobWaveformData(blob),
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

    if (typeof window !== undefined && expandedTrack) {
      document.body.addEventListener('click', closeExpandedTack);
    }

    return () => {
      if (typeof window !== undefined) {
        document.body.removeEventListener('click', closeExpandedTack);
      }
    };
  }, [expandedTrack, setExpandedTrack]);

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
    <div className={cx(props.className, styles.container)}>
      <div className={styles.content}>
        <Tracks
          className={cx(styles.tracks, {
            [styles.visible]: displayTrackList,
          })}
          expanded={expandedTrack}
          playbackState={playbackState}
          tracks={tracks}
          onExpand={track => {
            setExpandedTrack(track);
            setPlaybackState(PlaybackState.Inactive);
          }}
          onSelect={track =>
            props.onRecordingCreated?.(audioBlobToFile(track.blob))
          }
          onSetPlaybackState={setPlaybackState}
        />
        <Visualization
          amplitude={amplitude}
          className={cx(styles.visuals, {
            [styles.visible]: displayVisualizations,
          })}
          frequencies={freqFreqDomain}
          recorderState={recorderState}
          timeElapsed={timeElapsed}
        />
        <ProcessingCover
          className={cx(styles.processingCover, {
            [styles.visible]: processing,
          })}
        />
      </div>
      <Footer
        disabled={!!error || processing}
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
    </div>
  );
}
