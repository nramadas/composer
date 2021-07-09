import cx from 'classnames';
import React from 'react';

import { Note } from '#components/composition/Note';
import { Block as BlockModel, BlockType } from '#lib/models/Block';

import styles from './index.module.scss';

interface Props {
  block: BlockModel;
  className?: string;
}

export function Block(props: Props) {
  return (
    <div
      className={cx(props.className, styles.container, {
        [styles.by2]: props.block.style === 2 || props.block.style === 4,
        [styles.by3]: props.block.style === 3 || props.block.style === 6,
      })}
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          {props.block.type === BlockType.Note ? (
            <Note
              className={styles.note}
              shruti={props.block.shruti}
              sthayi={props.block.sthayi}
            />
          ) : props.block.type === BlockType.Continue ? (
            <div className={styles.continue}>,</div>
          ) : (
            <div className={styles.emptyBlock} />
          )}
        </div>
        {props.block.style === 2 || props.block.style === 3 ? (
          <div className={styles.over1} />
        ) : props.block.style === 4 || props.block.style === 6 ? (
          <>
            <div className={styles.over1} />
            <div className={styles.over2} />
          </>
        ) : undefined}
        {props.block.style === 3 ? (
          <div className={styles.three1}>3</div>
        ) : props.block.style === 6 ? (
          <div className={styles.three2}>3</div>
        ) : undefined}
      </div>
      <div className={styles.lyrics}>{props.block.lyrics}</div>
    </div>
  );
}
