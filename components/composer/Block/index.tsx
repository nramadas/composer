import cx from 'classnames';
import React from 'react';

import { EmptyBlock } from '#components/icons/EmptyBlock';
import { NoteBlock } from '#lib/models/NoteBlock';

import styles from './index.module.scss';

interface Props {
  className?: string;
  block: NoteBlock;
}

export function Block(props: Props) {
  return (
    <button className={cx(props.className, styles.container)}>
      <EmptyBlock className={styles.emptyBlockIcon} />
    </button>
  );
}
