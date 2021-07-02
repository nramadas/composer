import cx from 'classnames';
import React, { useRef } from 'react';

import { useIsomorphicLayoutEffect } from '#lib/hooks/useIsomorphicLayoutEffect';

import styles from './index.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLDivElement> {
  value: string;
}

export function ContentEditableInput(props: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (ref.current && ref.current.innerText !== props.value) {
      ref.current.innerText = props.value;

      if (ref.current === document.activeElement) {
        const range = document.createRange();
        range.selectNodeContents(ref.current);
        range.collapse(false);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    }
  }, [props.value]);

  return (
    <div
      {...props}
      contentEditable
      className={cx(styles.input, props.className)}
      ref={ref}
      onInput={e => {
        e.preventDefault();
        const text = e.currentTarget.innerText;
        console.log(text);

        if (text !== props.value) {
          props.onInput?.(e);
        }
      }}
    />
  );
}
