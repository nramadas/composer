import cx from 'classnames';
import React from 'react';

import styles from './index.module.scss';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  selected?: boolean;
}

export function RoundedGlass(props: Props) {
  const { children, className, disabled, selected, ...rest } = props;

  return (
    <button
      {...rest}
      className={cx(styles.container, className, {
        [styles.disabled]: !!disabled,
        [styles.selected]: !!selected,
      })}
    >
      <div className={cx(styles.layer, styles.layer1)} />
      <div className={cx(styles.layer, styles.layer2)} />
      <div className={styles.children}>{children}</div>
    </button>
  );
}
