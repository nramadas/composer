import cx from 'classnames';
import React from 'react';

import { LENGTHS } from '#lib/avartanLength';
import { useSelector } from '#lib/hooks/useSelector';
import { Anga } from '#lib/models/Anga';
import { taalaToAvartan } from '#lib/taalaToAvartan';

import styles from './index.module.scss';

function* emitBlocks(blocks: JSX.Element[], avartan: Anga[]) {
  const positions = avartan.reduce((acc, anga) => {
    const prev = acc[acc.length - 1] || 0;
    acc.push(prev + LENGTHS.get(anga));
    return acc;
  }, [] as number[]);

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];

    yield React.cloneElement(block, {
      key: i,
    });

    if (positions.includes(i + 1)) {
      yield <div className={styles.divider} key={i + 'd'} />;
    }
  }
}

interface Props {
  children: JSX.Element[];
  className?: string;
}

export function Row(props: Props) {
  const { avartan } = useSelector(state => ({
    avartan: taalaToAvartan(state.composition.taala),
  }));

  return (
    <div className={cx(props.className, styles.container)}>
      <div className={styles.content}>
        {Array.from(emitBlocks(props.children, avartan))}
      </div>
    </div>
  );
}
