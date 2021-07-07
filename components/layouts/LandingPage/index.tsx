import cx from 'classnames';
import throttle from 'lodash/throttle';
import React, { useEffect, useState } from 'react';

import styles from './index.module.scss';

interface Props {
  className?: string;
  content: React.ReactNode;
  header: React.ReactNode;
}

export function LandingPage(props: Props) {
  const [elevation, setElevation] = useState(0);

  useEffect(() => {
    const manageScroll = throttle(() => {
      const scrollPos = window.pageYOffset;

      if (scrollPos < 50) {
        setElevation(0);
      } else {
        setElevation(1);
      }
    }, 16);

    if (typeof window !== undefined) {
      document.addEventListener('scroll', manageScroll);
    }

    return () => {
      if (typeof window !== undefined) {
        document.removeEventListener('scroll', manageScroll);
      }
    };
  }, [elevation, setElevation]);

  return (
    <div className={cx(styles.container, props.className)}>
      <header
        className={cx(styles.header, {
          [styles.elevation1]: elevation === 1,
        })}
      >
        <div className={styles.headerContent}>{props.header}</div>
      </header>
      <article className={styles.content}>{props.content}</article>
    </div>
  );
}
