import cx from 'classnames';
import React from 'react';

import { Block } from '#components/composer/Block';
import { Row } from '#components/composer/Row';
import { avartanLength } from '#lib/avartanLength';
import { useSelector } from '#lib/hooks/useSelector';
import { swaraToNoteBlocks } from '#lib/swaraToNoteBlocks';
import { taalaToAvartan } from '#lib/taalaToAvartan';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function Editor(props: Props) {
  const { avartan, swara } = useSelector(state => ({
    avartan: taalaToAvartan(state.composition.taala),
    swara: state.composition.swara,
  }));
  const rowSize = avartanLength(avartan);
  const noteBlocks = swaraToNoteBlocks(swara, rowSize);

  console.log(noteBlocks, rowSize);

  return (
    <div className={cx(styles.container, props.className)}>
      {noteBlocks.map((blocks, i) => (
        <Row avartan={avartan} className={styles.row} key={i}>
          {blocks.map(block => (
            <Block block={block} key={i} />
          ))}
        </Row>
      ))}
    </div>
  );
}
