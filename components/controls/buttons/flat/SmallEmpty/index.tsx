import cx from 'classnames';
import React from 'react';

import { Caption } from '#components/typography/Caption';

import styles from './index.module.scss';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export function SmallEmpty(props: Props) {
  const { className, children, disabled, ...rest } = props;

  return (
    <button
      {...rest}
      className={cx(styles.container, className, {
        [styles.disabled]: !!disabled,
      })}
    >
      <Caption>{children}</Caption>
    </button>
  );
}
