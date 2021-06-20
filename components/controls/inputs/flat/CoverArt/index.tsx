import cx from 'classnames';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { AddImage } from '#components/icons/AddImage';
import { Trash } from '#components/icons/Trash';
import { fileToDataUrl } from '#lib/fileToDataUrl';

import styles from './index.module.scss';

interface Image {
  file: File;
  src: string;
}

interface Props {
  className?: string;
  onChange?(image: File | null): void;
}

export function CoverArt(props: Props) {
  const [image, setImage] = useState<Image | null>(null);

  const onDrop = useCallback(
    async (files: File[]) => {
      const file = files[0];

      if (!file) {
        return;
      }

      const src = await fileToDataUrl(file);
      setImage({ file, src });
      props.onChange?.(file);
    },
    [props.onChange, setImage],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ['image/jpeg', 'image/png'],
    maxFiles: 1,
  });

  return (
    <div className={cx(props.className, styles.container)}>
      {image ? (
        <div
          className={styles.imagePreview}
          style={{
            backgroundImage: `url(${image.src})`,
          }}
        >
          <Trash
            className={styles.trashIcon}
            onClick={() => {
              setImage(null);
              props.onChange?.(null);
            }}
          />
        </div>
      ) : (
        <div
          className={cx(styles.dragArea, {
            [styles.dragActive]: isDragActive,
          })}
          {...getRootProps()}
        >
          <AddImage className={styles.addIcon} />
          <input {...getInputProps()} />
        </div>
      )}
    </div>
  );
}
