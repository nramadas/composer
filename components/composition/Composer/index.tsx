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

export const Composer = memo(
  function Composer(props: Props) {
    const dispatch = useDispatch();
    const composer = useSelector(state => state.composition.composer);
    const setComposer = useCallback(
      debounce((text: string) => {
        dispatch(composerActions.setComposer(text));
      }, 250),
      [],
    );

    return (
      <ContentEditableInput
        className={cx(styles.input, props.className)}
        placeholder="name"
        value={composer}
        onKeyDown={e => {
          if (!e.metaKey && !e.ctrlKey) {
            e.stopPropagation();
          }
        }}
        onInput={e => {
          setComposer(e.currentTarget.innerText);
        }}
      />
    );
  },
  () => true,
);
