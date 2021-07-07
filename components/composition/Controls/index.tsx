import cx from 'classnames';
import React from 'react';

import { MiscControls } from '#components/composition/MiscControls';
import { PickMaatraa } from '#components/composition/PickMaatraa';
import { PickSthayi } from '#components/composition/PickSthayi';
import { UndoRedo } from '#components/composition/UndoRedo';

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
      <MiscControls />
    </div>
  );
}
