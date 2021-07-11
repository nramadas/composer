import cx from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { RoundedGlass } from '#components/controls/buttons/raised/RoundedGlass';
import { Close } from '#components/icons/Close';
import { NewDocument } from '#components/icons/NewDocument';
import { PageRoute } from '#lib/constants/Route';
import { useConfirmation } from '#lib/hooks/useConfirmation';
import { useDispatch } from '#lib/hooks/useDispatch';
import { useUserDependentQuery } from '#lib/hooks/useUserDependentQuery';
import { composerActions } from '#lib/redux/actions';

import fetchUserQuery from './fetchUser.gql';
import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function MiscControls(props: Props) {
  const confirm = useConfirmation();
  const dispatch = useDispatch();
  const [result] = useUserDependentQuery({ query: fetchUserQuery });
  const userNotActivated = !result.fetching && !result.data?.me?.activated;

  return (
    <div className={cx(props.className, styles.container)}>
      <RoundedGlass
        className={styles.button}
        disabled={userNotActivated}
        infotext="New composition"
        onClick={async () => {
          if (userNotActivated) {
            return;
          }

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
      <Link
        to={userNotActivated ? '' : PageRoute.Compositions}
        onClick={e => {
          if (userNotActivated) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        <RoundedGlass
          className={styles.button}
          disabled={userNotActivated}
          infotext="Save & close"
        >
          <Close className={styles.icon} />
        </RoundedGlass>
      </Link>
    </div>
  );
}
