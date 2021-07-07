import cx from 'classnames';
import debounce from 'lodash/debounce';
import React, { useCallback } from 'react';

import { Block } from '#components/composition/Block';
import { ContentEditableInput } from '#components/controls/inputs/flat/ContentEditableInput';
import { LENGTHS } from '#lib/avartanLength';
import { beatLength } from '#lib/groupBlocksByAvartan';
import { useDispatch } from '#lib/hooks/useDispatch';
import { useSelector } from '#lib/hooks/useSelector';
import { Anga } from '#lib/models/Anga';
import { Block as BlockModel } from '#lib/models/Block';
import { composerActions } from '#lib/redux/actions';
import { taalaToAvartan } from '#lib/taalaToAvartan';

import styles from './index.module.scss';

interface BlockRef {
  key: BlockModel['key'];
  length: number;
}

function emitBlocks(blocks: BlockRef[], avartan: Anga[]) {
  const result: JSX.Element[] = [];
  let currentAngaIndex = 0;
  let currentAngaLength = LENGTHS.get(avartan[currentAngaIndex]);
  let currentLength = 0;
  let currentRow: BlockModel['key'][] = [];

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];

    if (currentLength >= currentAngaLength) {
      result.push(
        <div className={styles.anga}>
          {currentRow.map(key => (
            <Block referenceKey={key} key={key} />
          ))}
          <div className={styles.divider} />
        </div>,
      );

      currentAngaIndex = (currentAngaIndex + 1) % avartan.length;
      currentAngaLength = LENGTHS.get(avartan[currentAngaIndex]);
      currentLength = 0;
      currentRow = [];
    }

    currentRow.push(block.key);
    currentLength += block.length;
  }

  result.push(
    <div className={styles.anga}>
      {currentRow.map(key => (
        <Block referenceKey={key} key={key} />
      ))}
      <div className={styles.divider} />
      <div className={styles.divider} />
    </div>,
  );

  return result;
}

interface Props {
  blocks: BlockModel['key'][];
  rowKey: number;
  className?: string;
}

export function Row(props: Props) {
  const dispatch = useDispatch();

  const { avartan, blocks, sectionTitle } = useSelector(
    state => ({
      avartan: taalaToAvartan(state.composition.taala),
      blocks: props.blocks.map(key => ({
        key,
        length: beatLength(state.composition.document.allBlocks[key]),
      })),
      sectionTitle: state.composition.sectionTitles[props.rowKey] || '',
    }),
    [props.blocks, props.rowKey],
  );

  const setSectionTitle = useCallback(
    debounce((text: string) => {
      dispatch(
        composerActions.setSectionTitle({
          text,
          key: props.rowKey,
        }),
      );
    }, 250),
    [props.rowKey],
  );

  return (
    <div className={cx(props.className, styles.container)}>
      <ContentEditableInput
        className={styles.input}
        value={sectionTitle}
        onKeyDown={e => {
          if (!e.metaKey && !e.ctrlKey) {
            e.stopPropagation();
          }
        }}
        onInput={e => {
          setSectionTitle(e.currentTarget.innerText);
        }}
      />
      <div className={styles.content}>
        {emitBlocks(blocks, avartan).map((el, i) =>
          React.cloneElement(el, {
            key: i,
          }),
        )}
      </div>
    </div>
  );
}
