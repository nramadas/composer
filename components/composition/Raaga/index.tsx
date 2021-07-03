import cx from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { Body1 } from '#components/typography/Body1';
import { ModalRoute } from '#lib/constants/Route';
import { useModalLink } from '#lib/hooks/useModalLink';
import { useSelector } from '#lib/hooks/useSelector';
import { raagaToName } from '#lib/raagaToName';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function Raaga(props: Props) {
  const getModalLink = useModalLink();
  const { raaga, useDikshitarNames } = useSelector(state => ({
    raaga: state.composition.raaga,
    useDikshitarNames: state.composition.useDikshitarNames,
  }));

  return (
    <Link
      className={cx(styles.container, props.className)}
      to={getModalLink(ModalRoute.PickRaaga)}
    >
      <Body1>{raagaToName(raaga, useDikshitarNames)}</Body1>
    </Link>
  );
}
