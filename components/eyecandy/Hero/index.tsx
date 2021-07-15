import cx from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { Filled } from '#components/controls/buttons/flat/Filled';
import { Ganapathi } from '#components/eyecandy/Ganapathi';
import { H1 } from '#components/typography/H1';
import { H3 } from '#components/typography/H3';
import { PageRoute } from '#lib/constants/Route';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function Hero(props: Props) {
  return (
    <article className={cx(props.className, styles.container)}>
      <div className={styles.image}>
        <Ganapathi className={styles.ganapathi} />
      </div>
      <div className={styles.content}>
        <H1 className={styles.title}>Ganapathi</H1>
        <H3 className={styles.subTitle}>Carnatic Music Notation</H3>
        <Link className={styles.cta} to={PageRoute.Compose}>
          <Filled>Go to editor</Filled>
        </Link>
      </div>
    </article>
  );
}
