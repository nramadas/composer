import cx from 'classnames';
import React from 'react';

import styles from './index.module.scss';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export function Circular(props: Props) {
  const { children, className, disabled, ...rest } = props;

  return (
    <button
      {...rest}
      className={cx(styles.container, className, {
        [styles.disabled]: !!disabled,
      })}
    >
      <div className={cx(styles.layer, styles.layer1)} />
      <div className={cx(styles.layer, styles.layer2)} />
      <div className={styles.children}>{children}</div>
    </button>
  );
}
