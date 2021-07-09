import cx from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'urql';

import { Filled } from '#components/controls/buttons/flat/Filled';
import fetchUserQuery from '#components/controls/GlobalHeader/Account/fetchUser.gql';
import { Ganapathi } from '#components/eyecandy/Ganapathi';
import { H1 } from '#components/typography/H1';
import { H3 } from '#components/typography/H3';
import { PageRoute } from '#lib/constants/Route';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function Hero(props: Props) {
  const [result] = useQuery({ query: fetchUserQuery });

  return (
    <article className={cx(props.className, styles.container)}>
      <div className={styles.image}>
        <Ganapathi className={styles.ganapathi} />
      </div>
      <div className={styles.content}>
        <H1 className={styles.title}>Ganapathi</H1>
        <H3 className={styles.subTitle}>Carnatic Music Notation</H3>
        <Link className={styles.cta} to={PageRoute.Compose}>
          <Filled>
            {result.data?.me ? 'Go to editor' : 'Try it for free'}
          </Filled>
        </Link>
      </div>
    </article>
  );
}
