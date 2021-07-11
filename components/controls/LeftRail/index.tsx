import cx from 'classnames';
import React from 'react';
import { useLocation } from 'react-router-dom';

import { Logo } from '#components/controls/Logo';
import { NavButton } from '#components/controls/NavButton';
import { DocumentsEmpty } from '#components/icons/DocumentsEmpty';
import { NewCompositionEmpty } from '#components/icons/NewCompositionEmpty';
import { PersonEmpty } from '#components/icons/PersonEmpty';
import { PageRoute } from '#lib/constants/Route';
import { useUserDependentQuery } from '#lib/hooks/useUserDependentQuery';

import fetchUserQuery from './fetchUser.gql';
import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function LeftRail(props: Props) {
  const location = useLocation();
  const [fetchUserResult] = useUserDependentQuery({ query: fetchUserQuery });
  const userIsLoggedIn = !!fetchUserResult.data?.me;
  const userIsActivated = !!fetchUserResult.data?.me?.activated;

  return (
    <nav className={cx(styles.container, props.className)}>
      <div className={styles.col}>
        <Logo className={cx(styles.button, styles.logo)} />
        <NavButton
          className={styles.button}
          infotext="Compose"
          to={PageRoute.Compose}
          selected={location.pathname.includes(PageRoute.Compose)}
        >
          <NewCompositionEmpty className={styles.icon} />
        </NavButton>
        <NavButton
          className={styles.button}
          disabled={!userIsActivated}
          infotext="All compositions"
          to={PageRoute.Compositions}
          selected={location.pathname.includes(PageRoute.Compositions)}
        >
          <DocumentsEmpty className={styles.icon} />
        </NavButton>
      </div>
      <div className={styles.col}>
        <NavButton
          className={styles.button}
          disabled={!userIsLoggedIn}
          infotext="Profile"
          to={PageRoute.Profile}
          selected={location.pathname.includes(PageRoute.Profile)}
        >
          <PersonEmpty className={styles.icon} />
        </NavButton>
      </div>
    </nav>
  );
}
