import cx from 'classnames';
import React, { useState } from 'react';

import { AudioUploader } from '#components/controls/AudioUploader';
import { Filled } from '#components/controls/buttons/flat/Filled';
import { Details } from '#components/forms/RecordedAudioFeedItemCreation/Details';
import { Close } from '#components/icons/Close';
import { Body2 } from '#components/typography/Body2';

import styles from './index.module.scss';

interface Props {
  className?: string;
  onClose?(): void;
}

export function UploadedAudioFeedItemCreation(props: Props) {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [showSlideOut, setShowSlideOut] = useState(false);
  const [showSlideOutCorners, setShowSlideOutCorners] = useState(false);
  const [title, setTitle] = useState('');
  const [coverArt, setCoverArt] = useState<File | null>(null);

  return (
    <div
      className={cx(styles.container, props.className, {
        [styles.slideOutOpen]: showSlideOut,
        [styles.slideOutCornersVisible]: showSlideOutCorners,
      })}
    >
      <div className={styles.content}>
        <AudioUploader
          className={styles.uploader}
          header={
            <div className={styles.uploaderHeader}>
              <Body2>Step 1: Upload</Body2>
              {!showSlideOut && (
                <Close className={styles.closeIcon} onClick={props.onClose} />
              )}
            </div>
          }
          onChange={file => {
            setAudioFile(file);
            setShowSlideOutCorners(true);
            // not ideal, but onTansitionEnd does not seem to work
            setTimeout(() => setShowSlideOut(true), 50);
          }}
        />
        <article className={styles.slideOut}>
          <header className={styles.slideOutHeader}>
            <Body2>Step 2: Add Details</Body2>
            <Close className={styles.closeIcon} onClick={props.onClose} />
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
