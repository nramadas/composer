import cx from 'classnames';
import React from 'react';

import { Scale } from '#components/composition/Scale';
import { Body1 } from '#components/typography/Body1';
import { Composition } from '#lib/models/Composition';
import { raagaToName } from '#lib/raagaToName';
import { taalaToName } from '#lib/taalaToName';
import { taalaToSymbols } from '#lib/taalaToSymbols';

import styles from './index.module.scss';

interface Props {
  className?: string;
  composition: Composition;
}

export function Metadata(props: Props) {
  return (
    <div className={cx(props.className, styles.container)}>
      <Body1 className={styles.label}>Composer:</Body1>
      <Body1 className={styles.value}>
        {props.composition.composer || 'Unknown'}
      </Body1>
      <Body1 className={styles.label}>Rāga:</Body1>
      <Body1 className={styles.value}>
        {raagaToName(
          props.composition.raaga,
          props.composition.useDikshitarNames,
        )}
      </Body1>
      {props.composition.raaga !== 'RaagaMaalikaa' && (
        <>
          <Body1 className={styles.label}>Ārohanam: </Body1>
          <Scale
            className={styles.scale}
            raaga={props.composition.raaga}
            style="aa"
          />
          <Body1 className={styles.label}>Avarohanam: </Body1>
          <Scale
            className={styles.scale}
            raaga={props.composition.raaga}
            style="av"
          />
        </>
      )}
      <Body1 className={styles.label}>Tāla:</Body1>
      <Body1 className={styles.value}>
        {taalaToName(props.composition.taala)}&nbsp;&nbsp;
        {taalaToSymbols(props.composition.taala)}
      </Body1>
    </div>
  );
}
