import cx from 'classnames';
import React from 'react';

import styles from './index.module.scss';

interface Props {
  className?: string;
  content: React.ReactNode;
  leftRail: React.ReactNode;
}

export function Workspace(props: Props) {
  return (
    <div className={cx(styles.container)}>
      <nav className={styles.nav}>{props.leftRail}</nav>
      <article className={styles.content}>{props.content}</article>
    </div>
  );
}
