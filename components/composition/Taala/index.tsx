import cx from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { Body1 } from '#components/typography/Body1';
import { ModalRoute } from '#lib/constants/Route';
import { useModalLink } from '#lib/hooks/useModalLink';
import { useSelector } from '#lib/hooks/useSelector';
import { taalaToToName } from '#lib/taalaToName';
import { taalaToSymbols } from '#lib/taalaToSymbols';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function Taala(props: Props) {
  const getModalLink = useModalLink();
  const { taala } = useSelector(state => ({
    taala: state.composition.taala,
  }));

  return (
    <Link
      className={cx(styles.container, props.className)}
      to={getModalLink(ModalRoute.PickTaala)}
    >
      <Body1>{taalaToToName(taala)}</Body1>
      &nbsp; &nbsp;
      <Body1>{taalaToSymbols(taala)}</Body1>
    </Link>
  );
}
