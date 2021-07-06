import cx from 'classnames';
import React from 'react';

import { PickMaatraa } from '#components/composition/PickMaatraa';
import { PickSthayi } from '#components/composition/PickSthayi';
import { Filled } from '#components/controls/buttons/flat/Filled';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function Controls(props: Props) {
  return (
    <div className={cx(styles.container, props.className)}>
      <PickSthayi />
      <PickMaatraa />
      <Filled>Save</Filled>
    </div>
  );
}
