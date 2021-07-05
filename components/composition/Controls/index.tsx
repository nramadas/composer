import cx from 'classnames';
import React from 'react';

import { PickSthayi } from '#components/composition/PickSthayi';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function Controls(props: Props) {
  return (
    <div className={cx(styles.container, props.className)}>
      <PickSthayi />
    </div>
  );
}
