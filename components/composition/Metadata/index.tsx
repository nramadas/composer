import cx from 'classnames';
import React from 'react';

import { Composer } from '#components/composition/Composer';
import { Body1 } from '#components/typography/Body1';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function Metadata(props: Props) {
  return (
    <div className={cx(styles.container, props.className)}>
      <div className={styles.label}>
        <Body1>Composer: </Body1>
      </div>
      <Composer />
    </div>
  );
}
