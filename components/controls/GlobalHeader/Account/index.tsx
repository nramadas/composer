import cx from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { Filled } from '#components/controls/buttons/flat/Filled';
import { OverlayLink } from '#components/controls/OverlayLink';
import { Person } from '#components/icons/Person';
import { Body1 } from '#components/typography/Body1';
import { OverlayRoute, PageRoute } from '#lib/constants/Route';
import { useUserDependentQuery } from '#lib/hooks/useUserDependentQuery';
import { User } from '#lib/models/User';

import fetchUserQuery from './fetchUser.gql';
import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function Account(props: Props) {
  const [result] = useUserDependentQuery({
    query: fetchUserQuery,
  });
  const me: User | null = result.data?.me;

  if (me) {
    return (
      <Link
        className={cx(props.className, styles.container)}
        to={PageRoute.Profile}
      >
        <Person className={styles.icon} />
        <Body1>{me.email}</Body1>
      </Link>
    );
  } else if (!result.fetching) {
    return (
      <OverlayLink className={props.className} to={OverlayRoute.Authentication}>
        <Filled>Sign up / Log in</Filled>
      </OverlayLink>
    );
  } else {
    return null;
  }
}
