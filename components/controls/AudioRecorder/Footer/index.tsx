import cx from 'classnames';
import React from 'react';

import { Circular } from '#components/controls/buttons/raised/Circular';
import { Mic } from '#components/icons/Mic';
import { MicProhibited } from '#components/icons/MicProhibited';
import { Pause } from '#components/icons/Pause';
import { Play } from '#components/icons/Play';
import { Stop } from '#components/icons/Stop';
import { RecorderState } from '#lib/hooks/useWebAudioCapture';

import styles from './index.module.scss';

interface Props {
  className?: string;
  disabled?: boolean;
  playing?: boolean;
  playbackEnabled?: boolean;
  recorderState: RecorderState;
  onPause?(): void;
  onPlay?(): void;
  onResume?(): void;
  onStart?(): void;
  onStop?(): void;
}

export function Footer(props: Props) {
  const stopButtonDisabled =
    props.disabled ||
    (props.recorderState === RecorderState.Inactive && !props.playing);

  return (
    <footer className={cx(styles.container, props.className)}>
      <div className={styles.content}>
        <Circular
          className={styles.secondaryButton}
          disabled={stopButtonDisabled}
          onClick={e => {
            e.nativeEvent.stopImmediatePropagation();

            if (!stopButtonDisabled) {
              props.onStop?.();
            }
          }}
        >
          <Stop className={styles.secondaryIcon} />
        </Circular>
        <Circular
          className={cx(styles.mainButton, styles.recordButton, {
            [styles.recording]:
              !props.disabled &&
              !props.playbackEnabled &&
              props.recorderState === RecorderState.Recording,
            [styles.playbackEnabled]:
              !props.disabled && !props.playing && !!props.playbackEnabled,
            [styles.playing]: !props.disabled && !!props.playing,
          })}
          disabled={props.disabled}
          onClick={e => {
            e.nativeEvent.stopImmediatePropagation();

            if (props.disabled) {
              return;
            }

            if (props.playbackEnabled) {
              if (props.playing) {
                return props.onPause?.();
              } else {
                return props.onPlay?.();
              }
            }

            switch (props.recorderState) {
              case RecorderState.Inactive:
                return props.onStart?.();
              case RecorderState.Recording:
                return props.onPause?.();
              case RecorderState.Paused:
                return props.onResume?.();
            }
          }}
        >
          {props.disabled ? (
            <MicProhibited className={cx(styles.mainIcon, styles.micIcon)} />
          ) : (
            <Mic className={cx(styles.mainIcon, styles.micIcon)} />
          )}
          <Pause className={cx(styles.mainIcon, styles.pauseIcon)} />
          <Play className={cx(styles.mainIcon, styles.playIcon)} />
        </Circular>
        <div className={styles.spacer} />
      </div>
    </footer>
  );
}
