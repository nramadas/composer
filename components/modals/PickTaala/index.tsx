import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import { PickTaala as PickTaalaForm } from '#components/composition/PickTaala';
import { Close } from '#components/icons/Close';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export default memo(
  function PickTaala(props: Props) {
    const history = useHistory();

    return (
      <div className={styles.container}>
        <PickTaalaForm />
        <Close
          className={styles.closeIcon}
          onClick={() => {
            history.goBack();
          }}
        />
      </div>
    );
  },
  () => true,
);
