import cx from 'classnames';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { Logo } from '#components/controls/Logo';
import { NavButton } from '#components/controls/NavButton';
import { DocumentsEmpty } from '#components/icons/DocumentsEmpty';
import { NewCompositionEmpty } from '#components/icons/NewCompositionEmpty';
import { PersonEmpty } from '#components/icons/PersonEmpty';
import { PageRoute } from '#lib/constants/Route';
import { useConfirmation } from '#lib/hooks/useConfirmation';
import { useDispatch } from '#lib/hooks/useDispatch';
import { composerActions } from '#lib/redux/actions';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function LeftRail(props: Props) {
  const confirm = useConfirmation();
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <nav className={cx(styles.container, props.className)}>
      <div className={styles.col}>
        <Logo className={styles.button} />
        <NavButton
          className={styles.button}
          infotext="New composition"
          to={PageRoute.Compose}
          onClick={async e => {
            if (history.location.pathname.includes(PageRoute.Compose)) {
              e.preventDefault();

              const answer = await confirm(
                'New composition',
                'Are you sure you want to create a new composition?',
              );

              if (answer) {
                dispatch(composerActions.reset());
              }
            }
          }}
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
