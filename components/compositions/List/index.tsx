import cx from 'classnames';
import React from 'react';

import { Composition } from '#components/compositions/Composition';
import { H3 } from '#components/typography/H3';
import { useStorage } from '#lib/hooks/useStorage';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function List(props: Props) {
  const { compositions } = useStorage();

  return (
    <div className={cx(props.className, styles.container)}>
      <header className={styles.header}>
        <H3>My Compositions</H3>
      </header>
      <div className={styles.shadowBox} />
      <div className={styles.compositionList}>
        <div className={styles.compositionListInner}>
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
