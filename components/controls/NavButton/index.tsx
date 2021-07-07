import cx from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { Caption } from '#components/typography/Caption';
import { PageRoute } from '#lib/constants/Route';

import styles from './index.module.scss';

interface Props {
  className?: string;
  children?: React.ReactNode;
  infotext?: string;
  to: PageRoute;
}

export function NavButton(props: Props) {
  return (
    <Link className={cx(props.className, styles.container)} to={props.to}>
      {props.children}
      {props.infotext && (
        <div className={styles.infotext}>
          <Caption>{props.infotext}</Caption>
        </div>
      )}
    </Link>
  );
}
