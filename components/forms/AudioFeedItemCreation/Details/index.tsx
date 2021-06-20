import cx from 'classnames';
import React from 'react';

import { CoverArt } from '#components/controls/inputs/flat/CoverArt';
import { InputWithValidation } from '#components/controls/inputs/flat/InputWithValidation';
import { Body1 } from '#components/typography/Body1';

import styles from './index.module.scss';

interface Props {
  className?: string;
  onCoverArtChange?(art: File | null): void;
  onTitleChange?(name: string): void;
}

export function Details(props: Props) {
  return (
    <div className={cx(props.className, styles.container)}>
      <div className={styles.addTitle}>
        <div className={styles.addTitleCaption}>
          <Body1>Add a title</Body1>
        </div>
        <InputWithValidation
          label="title"
          onChange={e => props.onTitleChange?.(e.currentTarget.value)}
          onValidate={text => (text ? '' : 'You must provide a title')}
        />
      </div>
      <div className={styles.addCoverArt}>
        <div className={styles.addTitleCaption}>
          <Body1>(Optional) Add a cover image</Body1>
        </div>
        <CoverArt onChange={props.onCoverArtChange} />
      </div>
    </div>
  );
}
