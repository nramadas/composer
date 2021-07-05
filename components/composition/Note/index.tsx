import cx from 'classnames';
import React from 'react';

import { Shruti } from '#lib/models/Shruti';
import { Sthayi } from '#lib/models/Sthayi';

import styles from './index.module.scss';

function getSymbol(shruti: Shruti, language = 'en') {
  switch (language) {
    default: {
      switch (shruti) {
        case Shruti.S:
          return 'S';
        case Shruti.R1:
        case Shruti.R2:
        case Shruti.R3:
          return 'R';
        case Shruti.G1:
        case Shruti.G2:
        case Shruti.G3:
          return 'G';
        case Shruti.M1:
        case Shruti.M2:
          return 'M';
        case Shruti.P:
          return 'P';
        case Shruti.D1:
        case Shruti.D2:
        case Shruti.D3:
          return 'D';
        case Shruti.N1:
        case Shruti.N2:
        case Shruti.N3:
          return 'N';
      }
    }
  }
}

function getSubscript(shruti: Shruti, language = 'en') {
  switch (language) {
    default: {
      switch (shruti) {
        case Shruti.S:
        case Shruti.P:
          return '';
        case Shruti.R1:
        case Shruti.G1:
        case Shruti.M1:
        case Shruti.D1:
        case Shruti.N1:
          return '1';
        case Shruti.R2:
        case Shruti.G2:
        case Shruti.M2:
        case Shruti.D2:
        case Shruti.N2:
          return '2';
        case Shruti.R3:
        case Shruti.G3:
        case Shruti.D3:
        case Shruti.N3:
          return '3';
      }
    }
  }
}

interface Props {
  className?: string;
  includeSemitone?: boolean;
  shruti: Shruti;
  sthayi: Sthayi;
}

export function Note(props: Props) {
  return (
    <div className={cx(styles.container, props.className)}>
      {getSymbol(props.shruti)}
      {props.includeSemitone && (
        <sub className={styles.semitone}>{getSubscript(props.shruti)}</sub>
      )}
      {(props.sthayi === Sthayi.Up1 || props.sthayi === Sthayi.Up2) && (
        <div className={styles.above}>
          {props.sthayi === Sthayi.Up2 ? '••' : '•'}
        </div>
      )}
      {(props.sthayi === Sthayi.Sub1 || props.sthayi === Sthayi.Sub2) && (
        <div className={styles.below}>
          {props.sthayi === Sthayi.Sub2 ? '••' : '•'}
        </div>
      )}
    </div>
  );
}
