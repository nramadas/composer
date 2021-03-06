import cx from 'classnames';
import React from 'react';

import styles from './index.module.scss';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {}

export function Subtitle2(props: Props) {
  return <span {...props} className={cx(styles.subtitle2)} />;
}
