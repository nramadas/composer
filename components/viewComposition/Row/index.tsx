import cx from 'classnames';
import React from 'react';

import { Block } from '#components/viewComposition/Block';
import { LENGTHS } from '#lib/avartanLength';
import { beatLength } from '#lib/groupBlocksByAvartan';
import { Anga } from '#lib/models/Anga';
import { Block as BlockModel } from '#lib/models/Block';
import { ChapuTaala, SuladiSaptaTaala } from '#lib/models/Taala';
import { taalaToAvartan } from '#lib/taalaToAvartan';

import styles from './index.module.scss';

interface BlockRef {
  block: BlockModel;
  length: number;
}

function emitBlocks(blocks: BlockRef[], avartan: Anga[]) {
  const result: JSX.Element[] = [];
  let currentAngaIndex = 0;
  let currentAngaLength = LENGTHS.get(avartan[currentAngaIndex]);
  let currentLength = 0;
  let currentRow: BlockModel[] = [];

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];

    if (currentLength >= currentAngaLength) {
      result.push(
        <div className={styles.anga}>
          {currentRow.map(block => (
            <Block block={block} key={block.key} />
          ))}
          <div className={styles.divider} />
        </div>,
      );

      currentAngaIndex = (currentAngaIndex + 1) % avartan.length;
      currentAngaLength = LENGTHS.get(avartan[currentAngaIndex]);
      currentLength = 0;
      currentRow = [];
    }

    currentRow.push(block.block);
    currentLength += block.length;
  }

  result.push(
    <div className={styles.anga}>
      {currentRow.map(block => (
        <Block block={block} key={block.key} />
      ))}
      <div className={styles.divider} />
      <div className={styles.divider} />
    </div>,
  );

  return result;
}

interface Props {
  blocks: BlockModel[];
  className?: string;
  taala: ChapuTaala | SuladiSaptaTaala;
  title?: string;
}

export function Row(props: Props) {
  const avartan = taalaToAvartan(props.taala);

  const blockRefs = props.blocks.map(block => ({
    block,
    length: beatLength(block),
  }));

  return (
    <div className={cx(props.className, styles.container)}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.content}>
        {emitBlocks(blockRefs, avartan).map((el, i) =>
          React.cloneElement(el, {
            key: i,
          }),
        )}
      </div>
    </div>
  );
}
