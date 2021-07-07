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
  selected?: boolean;
  onClick?(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void;
}

export function NavButton(props: Props) {
  return (
    <Link
      className={cx(props.className, styles.container, {
        [styles.selected]: !!props.selected,
      })}
      to={props.to}
      onClick={props.onClick}
    >
      {props.children}
      {props.infotext && (
        <div className={styles.infotext}>
          <Caption>{props.infotext}</Caption>
        </div>
      )}
    </Link>
  );
}
