import cx from 'classnames';
import React, { useEffect, useState } from 'react';

import { Body2 } from '#components/typography/Body2';
import { getAudioBlobWaveformData } from '#lib/getAudioBlobWaveformData';

import styles from './index.module.scss';

interface Props {
  className?: string;
  file: File | null;
  playbackPercentage: number;
  onSeekTo?(decimal: number): void;
}

export function Waveform(props: Props) {
  const [processing, setProcessing] = useState(false);
  const [waveform, setWaveform] = useState<number[]>([]);

  useEffect(() => {
    if (props.file) {
      setProcessing(true);
      getAudioBlobWaveformData(props.file, 90).then(waveform => {
        setWaveform(waveform);
        setProcessing(false);
      });
    } else {
      setWaveform([]);
    }
  }, [props.file]);

  return (
    <div
      className={cx(props.className, styles.container)}
      onClick={e => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = rect.x;
        const width = rect.width;
        const mouseX = e.clientX;
        const adjustedX = mouseX - x;
        if (adjustedX >= 0 && adjustedX <= width) {
          props.onSeekTo?.(adjustedX / width);
        }
      }}
    >
      {processing ? (
        <Body2>processing waveform...</Body2>
      ) : (
        <div className={styles.waveform}>
          {waveform.map((segment, i) => (
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
      )}
      <div
        className={styles.playback}
        style={{ width: `${props.playbackPercentage}%` }}
      />
    </div>
  );
}
