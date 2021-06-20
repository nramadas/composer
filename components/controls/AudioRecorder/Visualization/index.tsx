import cx from 'classnames';
import React, { memo } from 'react';

import { RecorderState } from '#lib/hooks/useWebAudioCapture';
import { msToElapsedTimeStr } from '#lib/msToElapseTime';

import styles from './index.module.scss';

interface Props {
  className?: string;
  amplitude: number;
  frequencies: number[];
  recorderState: RecorderState;
  timeElapsed: number;
  visible?: boolean;
}

export const Visualization = memo(function Visualization(props: Props) {
  const angleAmount = props.frequencies.length
    ? 760 / props.frequencies.length
    : 0;

  return (
    <div className={cx(styles.container, props.className)}>
      <div className={styles.infoCircle}>
        <div className={styles.recorderState} />
        <div className={styles.timeElapsed}>
          {msToElapsedTimeStr(props.timeElapsed)}
        </div>
        <div className={styles.recorderState}>
          {props.recorderState === RecorderState.Paused ? 'paused' : ''}
        </div>
      </div>
      <div
        className={styles.amplitude}
        style={{
          opacity: props.amplitude ? 0.25 + props.amplitude : 0,
          height: `${140 + props.amplitude * 100}px`,
          width: `${140 + props.amplitude * 100}px`,
        }}
      />
      <div className={styles.freqContainer}>
        {props.frequencies.map((freq, i) => (
          <div
            className={styles.freqBar}
            key={i}
            style={{
              height: `${150 * freq + 80}px`,
              transform: `translateX(-50%) rotate(${90 + angleAmount * i}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  if (prevProps.visible === false && nextProps.visible === false) {
    return true;
  }

  return false;
})
