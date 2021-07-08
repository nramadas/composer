import cx from 'classnames';
import React from 'react';

import { Logo } from '#components/controls/Logo';
import { H6 } from '#components/typography/H6';

import { Account } from './Account';
import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function GlobalHeader(props: Props) {
  return (
    <header className={cx(props.className, styles.container)}>
      <div className={styles.lhs}>
        <Logo className={styles.logo} />
        <H6 className={styles.title}>Ganapathi</H6>
      </div>
      <div className={styles.rhs}>
        <Account />
      </div>
    </header>
  );
}
