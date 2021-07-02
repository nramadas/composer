import cx from 'classnames';
import React, { memo } from 'react';

import { EmptyBlock } from '#components/icons/EmptyBlock';
import { useDispatch } from '#lib/hooks/useDispatch';
import { useSelector } from '#lib/hooks/useSelector';
import { Block as BlockModel } from '#lib/models/Block';
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
        withCursor: state.composition.cursorPosition === props.referenceKey,
      }),
      [props.referenceKey],
    );

    return (
      <button
        className={cx(props.className, styles.container, {
          [styles.hovered]: hovered,
          [styles.withCursor]: withCursor,
        })}
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
      </button>
    );
  },
  (prevProps, nextProps) => prevProps.referenceKey === nextProps.referenceKey,
);
