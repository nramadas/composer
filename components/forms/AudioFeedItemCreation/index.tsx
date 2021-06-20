import cx from 'classnames';
import React, { useState } from 'react';

import { AudioRecorder } from '#components/controls/AudioRecorder';
import { Filled } from '#components/controls/buttons/flat/Filled';
import { ArrowLeft } from '#components/icons/ArrowLeft';
import { Close } from '#components/icons/Close';
import { Body2 } from '#components/typography/Body2';

import { Details } from './Details';
import styles from './index.module.scss';

interface Props {
  className?: string;
  onClose?(): void;
}

export function AudioFeedItemCreation(props: Props) {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [showSlideOutCorners, setShowSlideOutCorners] = useState(false);
  const [title, setTitle] = useState('');
  const [coverArt, setCoverArt] = useState<File | null>(null);

  return (
    <div
      className={cx(styles.container, props.className, {
        [styles.slideOutOpen]: !!audioFile,
        [styles.slideOutCornersVisible]: showSlideOutCorners,
      })}
    >
      <div className={styles.content}>
        <AudioRecorder
          className={styles.recorder}
          header={
            <div className={styles.recorderHeader}>
              <Body2>Step 1: Record</Body2>
              {!audioFile && (
                <Close
                  className={styles.closeIcon}
                  onClick={() => props.onClose?.()}
                />
              )}
            </div>
          }
          preserveSelection={!!audioFile}
          onRecordingCreated={file => {
            setShowSlideOutCorners(true);
            // not ideal, but onTansitionEnd does not seem to work
            setTimeout(() => setAudioFile(file), 50);
          }}
        />
        <article className={styles.slideOut}>
          <header className={styles.slideOutHeader}>
            <Body2>Step 2: Add Details</Body2>
            <ArrowLeft
              className={styles.backIcon}
              onClick={() => {
                setAudioFile(null);
                // not ideal, but onTansitionEnd does not seem to work
                setTimeout(() => setShowSlideOutCorners(false), 375);
              }}
            />
          </header>
          <Details onCoverArtChange={setCoverArt} onTitleChange={setTitle} />
          <footer className={styles.controls}>
            <Filled
              disabled={!title || !audioFile}
              onClick={() => {
                console.log({
                  audioFile,
                  coverArt,
                  title,
                });
              }}
            >
              submit
            </Filled>
          </footer>
        </article>
      </div>
    </div>
  );
}
