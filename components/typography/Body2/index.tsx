import cx from 'classnames';
import React from 'react';

import styles from './index.module.scss';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {}

export function Body2(props: Props) {
  return <span {...props} className={cx(styles.body2, props.className)} />;
}
