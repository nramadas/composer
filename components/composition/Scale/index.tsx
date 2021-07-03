import cx from 'classnames';
import React from 'react';

import { Note } from '#components/composition/Note';
import { MelakartaRaaga, JanyaRaaga } from '#lib/models/Raaga';
import { raagaToNotes } from '#lib/raagaToNotes';

import styles from './index.module.scss';

interface Props {
  className?: string;
  raaga: MelakartaRaaga | JanyaRaaga;
  style: 'aa' | 'av';
}

export function Scale(props: Props) {
  const { aa, av } = raagaToNotes(props.raaga);
  const notes = props.style === 'aa' ? aa : av;

  return (
    <div className={cx(styles.container, props.className)}>
      {notes.map((note, i) => (
        <Note
          includeSemitone
          className={styles.note}
          key={i}
          shruti={note.shruti}
          sthayi={note.sthayi}
        />
      ))}
    </div>
  );
}
