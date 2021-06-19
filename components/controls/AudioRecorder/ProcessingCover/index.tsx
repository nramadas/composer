import cx from 'classnames';
import React from 'react';

import { H6 } from '#components/typography/H6';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function ProcessingCover(props: Props) {
  return (
    <div className={cx(props.className, styles.container)}>
      <H6>processing...</H6>
    </div>
  );
}
