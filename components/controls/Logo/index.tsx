import cx from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { GanapathiHead } from '#components/icons/GanapathiHead';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function Logo(props: Props) {
  return (
    <Link className={cx(props.className, styles.container)} to="/">
      <GanapathiHead className={styles.icon} />
    </Link>
  );
}
