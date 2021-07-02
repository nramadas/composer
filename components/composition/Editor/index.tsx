import cx from 'classnames';
import React, { memo } from 'react';

import { Block } from '#components/composition/Block';
import { Metadata } from '#components/composition/Metadata';
import { Row } from '#components/composition/Row';
import { Title } from '#components/composition/Title';
import { useEditorKeyboardInput } from '#lib/hooks/useEditorKeyboardInput';
import { useSelector } from '#lib/hooks/useSelector';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export const Editor = memo(
  function Editor(props: Props) {
    useEditorKeyboardInput();

    const { blocks } = useSelector(state => ({
      blocks: state.composition.blocks,
    }));

    return (
      <div className={cx(styles.container, props.className)}>
        <Title className={styles.title} />
        <Metadata />
        {blocks.map((row, i) => (
          <Row className={styles.row} key={i}>
            {row.map(blockKey => (
              <Block referenceKey={blockKey} key={blockKey} />
            ))}
          </Row>
        ))}
      </div>
    );
  },
  () => true,
);
