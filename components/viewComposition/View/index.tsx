import cx from 'classnames';
import React from 'react';

import { H4 } from '#components/typography/H4';
import { Metadata } from '#components/viewComposition/Metadata';
import { Row } from '#components/viewComposition/Row';
import { avartanLength } from '#lib/avartanLength';
import { BlockType } from '#lib/models/Block';
import { Composition } from '#lib/models/Composition';
import { taalaToAvartan } from '#lib/taalaToAvartan';

import styles from './index.module.scss';

function cleanUp(blocks: Composition['blocks']): Composition['blocks'] {
  const result: Composition['blocks'] = [];
  let skipCleanup = false;

  for (let i = blocks.length - 1; i >= 0; i--) {
    const row = blocks[i];
    if (skipCleanup) {
      result.push(row);
    } else {
      row.forEach(block => {
        if (block.type !== BlockType.Undefined) {
          skipCleanup = true;
        }
      });

      if (skipCleanup) {
        result.push(row);
      }
    }
  }

  return result.reverse();
}

interface Props {
  className?: string;
  composition: Composition;
}

export function View(props: Props) {
  const { composition } = props;
  const rowSize = avartanLength(taalaToAvartan(composition.taala));

  return (
    <article className={cx(styles.container, props.className)}>
      <H4 className={styles.title}>{composition.title}</H4>
      <Metadata className={styles.metaData} composition={composition} />
      <div className={styles.blocksWrapper}>
        <div
          className={cx(styles.blocks, {
            [styles.rowSize3]: rowSize === 3,
            [styles.rowSize5]: rowSize === 5,
            [styles.rowSize18]: rowSize === 18,
          })}
        >
          {cleanUp(composition.blocks).map((row, i) => (
            <Row
              blocks={row}
              className={styles.row}
              key={i}
              taala={composition.taala}
              title={composition.sectionTitles[i]}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
