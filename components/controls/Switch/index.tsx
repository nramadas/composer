import cx from 'classnames';
import React from 'react';

import styles from './index.module.scss';

interface Props {
  className?: string;
  value: boolean;
  onChange(): void;
}

export function Switch(props: Props) {
  return (
    <button
      className={cx(styles.container, props.className, {
        [styles.on]: props.value,
      })}
      onClick={props.onChange}
    >
      <div className={styles.thumb} />
    </button>
  );
}
