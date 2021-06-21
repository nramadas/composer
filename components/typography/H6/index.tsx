import cx from 'classnames';
import React from 'react';

import styles from './index.module.scss';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {}

export function H6(props: Props) {
  return <span {...props} className={cx(styles.h6, props.className)} />;
}
