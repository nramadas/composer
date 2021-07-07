import cx from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { PickMaatraa } from '#components/composition/PickMaatraa';
import { PickSthayi } from '#components/composition/PickSthayi';
import { UndoRedo } from '#components/composition/UndoRedo';
import { RoundedGlass } from '#components/controls/buttons/raised/RoundedGlass';
import { Close } from '#components/icons/Close';
import { PageRoute } from '#lib/constants/Route';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function Controls(props: Props) {
  return (
    <div className={cx(styles.container, props.className)}>
      <PickSthayi />
      <PickMaatraa />
      <UndoRedo />
      <Link to={PageRoute.Compositions}>
        <RoundedGlass className={styles.button} infotext="Save & close">
          <Close className={styles.closeIcon} />
        </RoundedGlass>
      </Link>
    </div>
  );
}
