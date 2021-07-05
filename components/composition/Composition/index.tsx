import cx from 'classnames';
import React from 'react';

import { Editor } from '#components/composition/Editor';
import { Keyboard } from '#components/composition/Keyboard';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function Composition(props: Props) {
  return (
    <div className={cx(props.className, styles.container)}>
      <div className={styles.controls} />
      <div className={styles.shadowBox} />
      <div className={styles.editorWrapper}>
        <Editor className={styles.editor} />
      </div>
      <Keyboard className={styles.keyboard} />
    </div>
  );
}
