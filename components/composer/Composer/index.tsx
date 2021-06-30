import cx from 'classnames';
import React from 'react';

import { Editor } from '#components/composer/Editor';
import { EditorStateProvider } from '#components/providers/EditorState';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function Composer(props: Props) {
  return (
    <EditorStateProvider>
      <div className={cx(props.className, styles.container)}>
        <div className={styles.controls} />
        <div className={styles.shadowBox} />
        <div className={styles.editorWrapper}>
          <Editor className={styles.editor} />
        </div>
      </div>
    </EditorStateProvider>
  );
}
