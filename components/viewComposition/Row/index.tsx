import cx from 'classnames';
import React from 'react';

import { Block } from '#components/viewComposition/Block';
import { LENGTHS } from '#lib/avartanLength';
import { Anga } from '#lib/models/Anga';
import { Block as BlockModel } from '#lib/models/Block';
import { ChapuTaala, SuladiSaptaTaala } from '#lib/models/Taala';
import { taalaToAvartan } from '#lib/taalaToAvartan';
import { totalBeatLength } from '#lib/totalBeatLength';

import styles from './index.module.scss';

function emitBlocks(blocks: BlockModel[], avartan: Anga[]) {
  const result: JSX.Element[] = [];
  let currentAngaIndex = 0;
  let currentAngaLength = LENGTHS.get(avartan[currentAngaIndex]);
  let currentLengths: BlockModel['style'][] = [];
  let currentRow: BlockModel[] = [];

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];

    if (totalBeatLength(currentLengths) >= currentAngaLength) {
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
      currentLengths = [];
      currentRow = [];
    }

    currentRow.push(block);
    currentLengths.push(block.style);
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

  return (
    <div className={cx(props.className, styles.container)}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.content}>
        {emitBlocks(props.blocks, avartan).map((el, i) =>
          React.cloneElement(el, {
            key: i,
          }),
        )}
      </div>
    </div>
  );
}
