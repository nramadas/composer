import React from 'react';
import { useHistory } from 'react-router-dom';

import { Authentication as AuthenticationForm } from '#components/forms/Authentication';
import { Close } from '#components/icons/Close';

import styles from './index.module.scss';

export default function Authentication() {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <AuthenticationForm
        className={styles.form}
        onComplete={() => {
          history.goBack();
        }}
      />
      <Close
        className={styles.closeIcon}
        onClick={() => {
          history.goBack();
        }}
      />
    </div>
  );
}
