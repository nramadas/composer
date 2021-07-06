import cx from 'classnames';
import React from 'react';

import { Caption } from '#components/typography/Caption';

import styles from './index.module.scss';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  infotext?: string;
  selected?: boolean;
}

export function RoundedGlass(props: Props) {
  const { children, className, disabled, infotext, selected, ...rest } = props;

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
      {infotext && (
        <div className={styles.infotext}>
          <Caption>{infotext}</Caption>
        </div>
      )}
    </button>
  );
}
