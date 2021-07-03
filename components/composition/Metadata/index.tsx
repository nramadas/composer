import cx from 'classnames';
import React from 'react';

import { Composer } from '#components/composition/Composer';
import { Raaga } from '#components/composition/Raaga';
import { Scale } from '#components/composition/Scale';
import { Taala } from '#components/composition/Taala';
import { Body1 } from '#components/typography/Body1';
import { useSelector } from '#lib/hooks/useSelector';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function Metadata(props: Props) {
  const raaga = useSelector(state => state.composition.raaga);

  return (
    <div className={cx(styles.container, props.className)}>
      <div className={styles.label}>
        <Body1>Composer: </Body1>
      </div>
      <Composer />
      <div className={styles.label}>
        <Body1>Rāga: </Body1>
      </div>
      <Raaga />
      {raaga !== 'RaagaMaalikaa' && (
        <>
          <div className={styles.label}>
            <Body1>Ārohanam: </Body1>
          </div>
          <Scale className={styles.scale} raaga={raaga} style="aa" />
          <div className={styles.label}>
            <Body1>Avarohanam: </Body1>
          </div>
          <Scale className={styles.scale} raaga={raaga} style="av" />
        </>
      )}
      <div className={styles.label}>
        <Body1>Tāla: </Body1>
      </div>
      <Taala />
    </div>
  );
}
