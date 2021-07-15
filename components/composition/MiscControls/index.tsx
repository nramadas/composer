import cx from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { RoundedGlass } from '#components/controls/buttons/raised/RoundedGlass';
import { Close } from '#components/icons/Close';
import { NewDocument } from '#components/icons/NewDocument';
import { PageRoute } from '#lib/constants/Route';
import { useConfirmation } from '#lib/hooks/useConfirmation';
import { useDispatch } from '#lib/hooks/useDispatch';
import { composerActions } from '#lib/redux/actions';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function MiscControls(props: Props) {
  const confirm = useConfirmation();
  const dispatch = useDispatch();

  return (
    <div className={cx(props.className, styles.container)}>
      <RoundedGlass
        className={styles.button}
        infotext="New composition"
        onClick={async () => {
          const answer = await confirm(
            'New composition',
            'Are you sure you want to create a new composition?',
          );

          if (answer) {
            dispatch(composerActions.reset());
          }
        }}
      >
        <NewDocument className={styles.icon} />
      </RoundedGlass>
      <Link to={PageRoute.Compositions}>
        <RoundedGlass className={styles.button} infotext="Save & close">
          <Close className={styles.icon} />
        </RoundedGlass>
      </Link>
    </div>
  );
}
