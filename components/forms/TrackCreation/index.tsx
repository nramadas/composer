import cx from 'classnames';
import React from 'react';

import { RoundedGlass } from '#components/controls/buttons/raised/RoundedGlass';
import { Close } from '#components/icons/Close';
import { Mic } from '#components/icons/Mic';
import { Upload } from '#components/icons/Upload';
import { Body2 } from '#components/typography/Body2';
import { H3 } from '#components/typography/H3';

import styles from './index.module.scss';

interface Props {
  className?: string;
  onClose?(): void;
}

export function TrackCreation(props: Props) {
  return (
    <article className={cx(props.className, styles.container)}>
      <header className={styles.header}>
        <H3>Create</H3>
        <Close className={styles.closeIcon} />
      </header>
      <div className={styles.options}>
        <RoundedGlass className={styles.option}>
          <Upload className={styles.icon} />
          <Body2>Upload a file</Body2>
        </RoundedGlass>
        <RoundedGlass className={styles.option}>
          <Mic className={styles.icon} />
          <Body2>Record in browser</Body2>
        </RoundedGlass>
      </div>
    </article>
  );
}
