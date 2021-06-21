import cx from 'classnames';
import clamp from 'lodash/clamp';
import React, { useEffect, useState } from 'react';

import { Body2 } from '#components/typography/Body2';
import { getAudioBlobWaveformData } from '#lib/getAudioBlobWaveformData';

import styles from './index.module.scss';

function computeSeekPosition(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = rect.x;
  const width = rect.width;
  const mouseX = e.clientX;
  const adjustedX = clamp(mouseX - x, 0, width);
  if (adjustedX >= 0 && adjustedX <= width) {
    return adjustedX / width;
  } else {
    return null;
  }
}

interface Props {
  className?: string;
  file: File | null;
  playbackPercentage: number;
  onSeekTo?(decimal: number): void;
}

export function Waveform(props: Props) {
  const [isDragging, setIsDragging] = useState(false);
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
      onMouseDown={e => {
        const seekPos = computeSeekPosition(e);
        if (typeof seekPos === 'number') {
          props.onSeekTo?.(seekPos);
        }
        setIsDragging(true);
      }}
      onMouseMove={e => {
        if (isDragging) {
          const seekPos = computeSeekPosition(e);
          if (typeof seekPos === 'number') {
            props.onSeekTo?.(seekPos);
          } else {
            setIsDragging(false);
          }
        }
      }}
      onMouseUp={() => {
        setIsDragging(false);
      }}
    >
      {processing ? (
        <Body2 className={styles.processing}>processing waveform...</Body2>
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
