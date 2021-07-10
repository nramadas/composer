import cx from 'classnames';
import React, { memo } from 'react';

import { Metadata } from '#components/composition/Metadata';
import { Row } from '#components/composition/Row';
import { Title } from '#components/composition/Title';
import { avartanLength } from '#lib/avartanLength';
import { useEditorKeyboardInput } from '#lib/hooks/useEditorKeyboardInput';
import { useEditorMouseTracking } from '#lib/hooks/useEditorMouseTracking';
import { useSelector } from '#lib/hooks/useSelector';
import { taalaToAvartan } from '#lib/taalaToAvartan';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export const Editor = memo(
  function Editor(props: Props) {
    useEditorKeyboardInput();
    useEditorMouseTracking();

    const { blocks, rowSize } = useSelector(state => ({
      blocks: state.composition.blocks,
      rowSize: avartanLength(taalaToAvartan(state.composition.taala)),
    }));

    return (
      <div className={cx(styles.container, props.className)}>
        <Title className={styles.title} />
        <Metadata />
        <div className={styles.blocksWrapper}>
          <div
            className={cx(styles.blocks, {
              [styles.rowSize3]: rowSize === 3,
              [styles.rowSize5]: rowSize === 5,
              [styles.rowSize18]: rowSize === 18,
            })}
          >
            {blocks.map((row, i) => (
              <Row blocks={row} className={styles.row} key={i} rowKey={i} />
            ))}
          </div>
        </div>
      </div>
    );
  },
  () => true,
);
