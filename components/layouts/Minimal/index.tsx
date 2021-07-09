import cx from 'classnames';
import React, { useEffect, useState, useRef } from 'react';

import { Logo } from '#components/controls/Logo';

import styles from './index.module.scss';

interface Props {
  className?: string;
  children: React.ReactNode;
}

export function Minimal(props: Props) {
  const [showLogo, setShowLogo] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    function track() {
      setShowLogo(() => true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setShowLogo(() => false);
      }, 1500);
    }

    if (typeof window !== undefined) {
      document.addEventListener('mousemove', track);
    }

    return () => {
      if (typeof window !== undefined) {
        document.removeEventListener('mousemove', track);
      }
    };
  }, [setShowLogo]);

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <div
      className={cx(props.className, styles.container, {
        [styles.showLogo]: showLogo,
      })}
    >
      <Logo className={styles.logo} />
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}
