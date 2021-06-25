import React from 'react';
import { useHistory } from 'react-router-dom';

import { Authentication as AuthenticationForm } from '#components/forms/Authentication';
import { PageRoute } from '#lib/constants/Route';

import styles from './index.module.scss';

export default function Authentication() {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <AuthenticationForm
        className={styles.form}
        onComplete={() => {
          history.push(PageRoute.Home);
        }}
      />
    </div>
  );
}
