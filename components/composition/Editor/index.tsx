import cx from 'classnames';
import React, { memo } from 'react';

import { Metadata } from '#components/composition/Metadata';
import { Row } from '#components/composition/Row';
import { Title } from '#components/composition/Title';
import { useEditorKeyboardInput } from '#lib/hooks/useEditorKeyboardInput';
import { useEditorMouseTracking } from '#lib/hooks/useEditorMouseTracking';
import { useSelector } from '#lib/hooks/useSelector';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export const Editor = memo(
  function Editor(props: Props) {
    useEditorKeyboardInput();
    useEditorMouseTracking();

    const { blocks } = useSelector(state => ({
      blocks: state.composition.blocks,
    }));

    return (
      <div className={cx(styles.container, props.className)}>
        <Title className={styles.title} />
        <Metadata />
        <div className={styles.blocks}>
          {blocks.map((row, i) => (
            <Row blocks={row} className={styles.row} key={i} />
          ))}
        </div>
      </div>
    );
  },
  () => true,
);
