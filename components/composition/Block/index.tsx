import cx from 'classnames';
import debounce from 'lodash/debounce';
import React, { memo, useCallback } from 'react';

import { Note } from '#components/composition/Note';
import { ContentEditableInput } from '#components/controls/inputs/flat/ContentEditableInput';
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

    const setLyrics = useCallback(
      debounce((text: string) => {
        dispatch(
          composerActions.setLyrics({
            text,
            key: block.key,
          }),
        );
      }, 250),
      [block.key],
    );

    return (
      <div
        className={cx(props.className, styles.container, {
          [styles.by2]: block.style === 2 || block.style === 4,
          [styles.by3]: block.style === 3 || block.style === 6,
        })}
      >
        <button
          className={cx(styles.button, {
            [styles.hovered]: hovered,
          })}
          onMouseDown={() => {
            dispatch(composerActions.cursorSet(props.referenceKey));
            dispatch(composerActions.startDrag());
          }}
          onMouseEnter={() =>
            dispatch(composerActions.toggleHovered(props.referenceKey))
          }
          onMouseLeave={() =>
            dispatch(composerActions.toggleHovered(props.referenceKey))
          }
        >
          <div className={styles.content}>
            {block.type === BlockType.Note ? (
              <Note
                className={styles.note}
                shruti={block.shruti}
                sthayi={block.sthayi}
              />
            ) : block.type === BlockType.Continue ? (
              <div className={styles.continue}>,</div>
            ) : (
              <EmptyBlock className={styles.emptyBlockIcon} />
            )}
          </div>
          {withCursor && <div className={styles.cursor} />}
          {block.style === 2 || block.style === 3 ? (
            <div className={styles.over1} />
          ) : block.style === 4 || block.style === 6 ? (
            <>
              <div className={styles.over1} />
              <div className={styles.over2} />
            </>
          ) : undefined}
          {block.style === 3 ? (
            <div className={styles.three1}>3</div>
          ) : block.style === 6 ? (
            <div className={styles.three2}>3</div>
          ) : undefined}
        </button>
        <ContentEditableInput
          className={styles.lyrics}
          value={block.lyrics || ''}
          onKeyDown={e => {
            if (!e.metaKey && !e.ctrlKey) {
              e.stopPropagation();
            }
          }}
          onInput={e => {
            setLyrics(e.currentTarget.innerText);
          }}
        />
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.referenceKey === nextProps.referenceKey,
);
