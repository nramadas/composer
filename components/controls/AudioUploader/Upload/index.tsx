import cx from 'classnames';
import React, { useCallback, memo } from 'react';
import { useDropzone } from 'react-dropzone';

import { Upload as UploadIcon } from '#components/icons/Upload';
import { Body1 } from '#components/typography/Body1';
import { Body2 } from '#components/typography/Body2';

import styles from './index.module.scss';

interface Props {
  className?: string;
  visible?: boolean;
  onChange?(audio: File | null): void;
}

export const Upload = memo(
  function Upload(props: Props) {
    const onDrop = useCallback(
      async (files: File[]) => {
        const file = files[0];

        if (!file) {
          return;
        }

        props.onChange?.(file);
      },
      [props.onChange],
    );

    const { getRootProps, getInputProps, isDragActive, fileRejections } =
      useDropzone({
        onDrop,
        accept: [
          'audio/ogg',
          'audio/opus',
          'audio/aac',
          'audio/mpeg',
          'audio/flac',
        ],
        maxFiles: 1,
      });

    const showError = fileRejections.length && !isDragActive;

    return (
      <div
        className={cx(props.className, styles.container, {
          [styles.dragActive]: isDragActive,
        })}
        {...getRootProps()}
      >
        <UploadIcon className={styles.uploadIcon} />
        <Body1
          className={cx(styles.text1, {
            [styles.error]: showError,
          })}
        >
          {showError ? 'Invalid file type' : 'Upload an audio file'}
        </Body1>
        <Body2 className={styles.text2}>.aac, .flac, .mp3, .ogg</Body2>
        <input {...getInputProps()} />
      </div>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.visible === false && nextProps.visible === false) {
      return true;
    }

    return false;
  },
);
