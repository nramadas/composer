import cx from 'classnames';
import React from 'react';

import { Circular } from '#components/controls/buttons/raised/Circular';
import { Pause } from '#components/icons/Pause';
import { Play } from '#components/icons/Play';
import { Stop } from '#components/icons/Stop';
import { Trash } from '#components/icons/Trash';
import { PlaybackState } from '#lib/hooks/useWebAudioPlayer';

import styles from './index.module.scss';

interface Props {
  className?: string;
  disabled?: boolean;
  playbackState: PlaybackState;
  onDelete?(): void;
  onPause?(): void;
  onPlay?(): void;
  onResume?(): void;
  onStop?(): void;
}

export function Footer(props: Props) {
  const stopButtonDisabled =
    props.disabled || props.playbackState === PlaybackState.Inactive;

  return (
    <footer className={cx(styles.container, props.className)}>
      <div className={styles.content}>
        <Circular
          className={styles.secondaryButton}
          disabled={stopButtonDisabled}
          onClick={() => {
            if (!stopButtonDisabled) {
              props.onStop?.();
            }
          }}
        >
          <Stop className={styles.secondaryIcon} />
        </Circular>
        <Circular
          className={cx(styles.mainButton, styles.playButton, {
            [styles.playing]: props.playbackState === PlaybackState.Playing,
          })}
          disabled={props.disabled}
          onClick={() => {
            if (props.disabled) {
              return;
            }

            switch (props.playbackState) {
              case PlaybackState.Inactive:
                return props.onPlay?.();
              case PlaybackState.Paused:
                return props.onResume?.();
              case PlaybackState.Playing:
                return props.onPause?.();
            }
          }}
        >
          <Pause className={cx(styles.mainIcon, styles.pauseIcon)} />
          <Play className={cx(styles.mainIcon, styles.playIcon)} />
        </Circular>
        <Circular
          className={styles.secondaryButton}
          disabled={props.disabled}
          onClick={() => {
            if (!props.disabled) {
              props.onDelete?.();
            }
          }}
        >
          <Trash className={styles.secondaryIcon} />
        </Circular>
      </div>
    </footer>
  );
}
