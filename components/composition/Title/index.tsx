import cx from 'classnames';
import debounce from 'lodash/debounce';
import React, { memo, useCallback } from 'react';

import { ContentEditableInput } from '#components/controls/inputs/flat/ContentEditableInput';
import { useDispatch } from '#lib/hooks/useDispatch';
import { useSelector } from '#lib/hooks/useSelector';
import { composerActions } from '#lib/redux/actions';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export const Title = memo(
  function Title(props: Props) {
    const dispatch = useDispatch();
    const title = useSelector(state => state.composition.title);
    const setTitle = useCallback(
      debounce((text: string) => {
        dispatch(composerActions.setTitle(text));
      }, 250),
      [],
    );

    return (
      <ContentEditableInput
        className={cx(styles.input, props.className)}
        placeholder="title"
        value={title}
        onKeyDown={e => {
          if (!e.metaKey && !e.ctrlKey) {
            e.stopPropagation();
          }
        }}
        onInput={e => {
          setTitle(e.currentTarget.innerText);
        }}
      />
    );
  },
  () => true,
);
