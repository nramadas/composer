import React from 'react';
import { useHistory } from 'react-router-dom';

import { PickRaaga as PickRaagaForm } from '#components/composition/PickRaaga';
import { Close } from '#components/icons/Close';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export default function PickRaaga(props: Props) {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <PickRaagaForm />
      <Close
        className={styles.closeIcon}
        onClick={() => {
          history.goBack();
        }}
      />
    </div>
  );
}
