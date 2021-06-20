import React from 'react';

import styles from './index.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Filled(props: Props) {
  return <button {...props} className={styles.button} />;
}
