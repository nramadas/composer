import cx from 'classnames';
import React from 'react';

import { Logo } from '#components/controls/Logo';
import { NavButton } from '#components/controls/NavButton';
import { DocumentsEmpty } from '#components/icons/DocumentsEmpty';
import { NewCompositionEmpty } from '#components/icons/NewCompositionEmpty';
import { PersonEmpty } from '#components/icons/PersonEmpty';
import { PageRoute } from '#lib/constants/Route';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function LeftRail(props: Props) {
  return (
    <nav className={cx(styles.container, props.className)}>
      <div className={styles.col}>
        <Logo className={styles.button} />
        <NavButton
          className={styles.button}
          infotext="New composition"
          to={PageRoute.Compose}
        >
          <NewCompositionEmpty className={styles.icon} />
        </NavButton>
        <NavButton
          className={styles.button}
          infotext="All compositions"
          to={PageRoute.Compositions}
        >
          <DocumentsEmpty className={styles.icon} />
        </NavButton>
      </div>
      <div className={styles.col}>
        <NavButton
          className={styles.button}
          infotext="Profile"
          to={PageRoute.Profile}
        >
          <PersonEmpty className={styles.icon} />
        </NavButton>
      </div>
    </nav>
  );
}
