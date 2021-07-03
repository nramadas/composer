import cx from 'classnames';
import React, { memo } from 'react';

import { EmptyBlock } from '#components/icons/EmptyBlock';
import { useDispatch } from '#lib/hooks/useDispatch';
import { useSelector } from '#lib/hooks/useSelector';
import { Block as BlockModel, BlockType } from '#lib/models/Block';
import { composerActions } from '#lib/redux/actions';

import styles from './index.module.scss';

interface Props {
  className?: string;
  referenceKey: BlockModel['key'];
}

export const Block = memo(
  function Block(props: Props) {
    const dispatch = useDispatch();
    const { block, hovered, withCursor } = useSelector(
      state => ({
        block: state.composition.document.allBlocks[props.referenceKey],
        hovered: state.composition.hovered === props.referenceKey,
        withCursor: state.composition.cursorPosition.includes(
          props.referenceKey,
        ),
      }),
      [props.referenceKey],
    );

    return (
      <button
        className={cx(props.className, styles.container, {
          [styles.hovered]: hovered,
        })}
        onClick={() => dispatch(composerActions.cursorSet(props.referenceKey))}
        onMouseEnter={() =>
          dispatch(composerActions.toggleHovered(props.referenceKey))
        }
        onMouseLeave={() =>
          dispatch(composerActions.toggleHovered(props.referenceKey))
        }
      >
        <div className={styles.content}>
          <EmptyBlock className={styles.emptyBlockIcon} />
        </div>
        {withCursor && <div className={styles.cursor} />}
        {(block.type === BlockType.Note ||
          block.type === BlockType.Undefined) &&
          (block.style === 2 || block.style === 3 ? (
            <div className={styles.over1} />
          ) : block.style === 4 || block.style === 6 ? (
            <>
              <div className={styles.over1} />
              <div className={styles.over2} />
            </>
          ) : block.style === 8 || block.style === 12 ? (
            <>
              <div className={styles.over1} />
              <div className={styles.over2} />
              <div className={styles.over3} />
            </>
          ) : undefined)}
      </button>
    );
  },
  (prevProps, nextProps) => prevProps.referenceKey === nextProps.referenceKey,
);
