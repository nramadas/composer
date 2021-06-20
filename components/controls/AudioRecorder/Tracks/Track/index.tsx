import cx from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

import { SmallEmpty } from '#components/controls/buttons/flat/SmallEmpty';
import { Overline } from '#components/typography/Overline';
import { msToElapsedTimeStr } from '#lib/msToElapseTime';
import { playAudioBlob } from '#lib/playAudioBlob';

import styles from './index.module.scss';

type AudioPlayback = ReturnType<typeof playAudioBlob>;

export enum PlaybackState {
  Inactive = 'Inactive',
  Paused = 'Paused',
  Playing = 'Playing',
}

export interface TrackModel {
  blob: Blob;
  duration: number;
  name: string;
  waveform: number[];
}

interface Props {
  className?: string;
  expanded?: boolean;
  playbackState?: PlaybackState;
  selected?: boolean;
  track: TrackModel;
  onExpand?(): void;
  onSelect?(): void;
  onSetPlaybackState?(playbackState: PlaybackState): void;
}

export function Track(props: Props) {
  const [playbackPosition, setPlaybackPosition] = useState(0);
  const playback = useRef<AudioPlayback>(playAudioBlob(props.track.blob));

  useEffect(() => {
    playback.current.currentTime.subscribe(t => {
      setPlaybackPosition(t);
    });

    playback.current.onComplete(() => {
      props.onSetPlaybackState?.(PlaybackState.Inactive);
    });
  }, [props.onSetPlaybackState]);

  useEffect(() => {
    if (!props.expanded) {
      playback.current.pause();
      playback.current.scrubTo(0);
      return;
    }

    switch (props.playbackState) {
      case PlaybackState.Inactive: {
        playback.current.pause();
        playback.current.scrubTo(0);
        break;
      }
      case PlaybackState.Paused: {
        playback.current.pause();
        break;
      }
      case PlaybackState.Playing: {
        playback.current.start();
        break;
      }
    }
  }, [props.expanded, props.playbackState]);

  return (
    <div
      className={cx(props.className, styles.container, {
        [styles.expanded]: !!props.expanded,
        [styles.selected]: !!props.selected,
      })}
      onClick={e => {
        e.nativeEvent.stopImmediatePropagation();
        props.onExpand?.();
      }}
    >
      <div className={cx(styles.layer, styles.layer1)} />
      <div className={cx(styles.layer, styles.layer2)} />
      <div className={styles.title}>
        <Overline>{props.track.name}</Overline>
        <Overline>{msToElapsedTimeStr(props.track.duration)}</Overline>
      </div>
      <div className={styles.waveformContainer}>
        <div
          className={styles.playback}
          style={{
            width: playbackPosition
              ? `${(100 * playbackPosition) / props.track.duration}%`
              : 0,
          }}
        />
        <div className={styles.waveform}>
          {props.track.waveform.map((segment, i) => (
            <div
              className={cx(styles.waveSegment, {
                [styles.waveUp]: i % 2 === 0,
                [styles.waveDown]: i % 2 === 1,
              })}
              key={i}
              style={{
                height: `${segment * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <SmallEmpty
          onClick={e => {
            e.nativeEvent.stopImmediatePropagation();
            e.stopPropagation();
            if (props.expanded) {
              props.onSelect?.();
            }
          }}
        >
          use this track
        </SmallEmpty>
      </div>
    </div>
  );
}
