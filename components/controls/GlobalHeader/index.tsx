import cx from 'classnames';
import React from 'react';

import { Filled } from '#components/controls/buttons/flat/Filled';
import { Logo } from '#components/controls/Logo';
import { OverlayLink } from '#components/controls/OverlayLink';
import { H6 } from '#components/typography/H6';
import { OverlayRoute } from '#lib/constants/Route';

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
        <OverlayLink to={OverlayRoute.Authentication}>
          <Filled>Sign up / Log in</Filled>
        </OverlayLink>
      </div>
    </header>
  );
}
