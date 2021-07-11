import cx from 'classnames';
import React from 'react';

import styles from './index.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input(props: Props) {
  return (
    <input
      {...props}
      className={cx(props.className, styles.container)}
      placeholder={props.label}
    />
  );
}
