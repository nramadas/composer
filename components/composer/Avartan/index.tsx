import cx from 'classnames';
import React from 'react';

import { Anga } from '#lib/models/Anga';

import styles from './index.module.scss';

function getSize(anga: Anga) {
  switch (anga) {
    case Anga.A1:
      return 1;
    case Anga.A2:
      return 2;
    case Anga.A3:
      return 3;
    case Anga.A4:
      return 4;
    case Anga.A5:
      return 5;
    case Anga.A7:
      return 7;
    case Anga.A9:
      return 9;
  }
}

function getBlock(anga: Anga, key: number | string, total: number) {
  switch (anga) {
    case Anga.A1:
      return (
        <div
          className={styles.anga}
          key={key}
          style={{
            width: `${100 / total}%`,
          }}
        />
      );
    case Anga.A2:
      return (
        <div
          className={styles.anga}
          key={key}
          style={{
            width: `${200 / total}%`,
          }}
        />
      );
    case Anga.A3:
      return (
        <div
          className={styles.anga}
          key={key}
          style={{
            width: `${300 / total}%`,
          }}
        />
      );
    case Anga.A4:
      return (
        <div
          className={styles.anga}
          key={key}
          style={{
            width: `${400 / total}%`,
          }}
        />
      );
    case Anga.A5:
      return (
        <div
          className={styles.anga}
          key={key}
          style={{
            width: `${500 / total}%`,
          }}
        />
      );
    case Anga.A7:
      return (
        <div
          className={styles.anga}
          key={key}
          style={{
            width: `${700 / total}%`,
          }}
        />
      );
    case Anga.A9:
      return (
        <div
          className={styles.anga}
          key={key}
          style={{
            width: `${900 / total}%`,
          }}
        />
      );
  }
}

interface Props {
  className?: string;
  angagal: Anga[];
}

export function Avartan(props: Props) {
  const totalSize = props.angagal.reduce((acc, a) => acc + getSize(a), 0);

  return (
    <div className={cx(props.className, styles.container)}>
      {props.angagal.map((anga, i) => getBlock(anga, i, totalSize))}
    </div>
  );
}
