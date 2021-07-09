import cx from 'classnames';
import React from 'react';

import { Composition } from '#components/compositions/Composition';
import { H3 } from '#components/typography/H3';
import { useUserDependentQuery } from '#lib/hooks/useUserDependentQuery';
import { Composition as CompositionModel } from '#lib/models/Composition';

import fetchCompositionsQuery from './fetchCompositions.gql';
import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function List(props: Props) {
  const [result] = useUserDependentQuery({ query: fetchCompositionsQuery });

  const compositions: CompositionModel[] = result.data?.myCompositions || [];

  return (
    <div className={cx(props.className, styles.container)}>
      <header className={styles.header}>
        <H3>My Compositions</H3>
      </header>
      <div className={styles.shadowBox} />
      <div className={styles.compositionList}>
        <div className={styles.compositionListInner}>
          {result.fetching &&
            Array.from({ length: 5 }).map((_, i) => (
              <div className={styles.emptyComposition} key={i} />
            ))}
          {compositions
            .sort((a, b) => b.lastUpdate - a.lastUpdate)
            .map(composition => (
              <Composition
                className={styles.composition}
                composition={composition}
                key={composition.key}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
