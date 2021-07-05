import cx from 'classnames';
import React, { memo } from 'react';

import { Note } from '#components/composition/Note';
import { RoundedGlass } from '#components/controls/buttons/raised/RoundedGlass';
import { Backspace } from '#components/icons/Backspace';
import { EmptyBlock } from '#components/icons/EmptyBlock';
import { Space } from '#components/icons/Space';
import { useDispatch } from '#lib/hooks/useDispatch';
import { useSelector } from '#lib/hooks/useSelector';
import { Sthayi } from '#lib/models/Sthayi';
import { composerActions } from '#lib/redux/actions';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export const Keyboard = memo(
  function Keyboard(props: Props) {
    const dispatch = useDispatch();
    const keyMap = useSelector(state => state.composition.keyMap);

    return (
      <div className={cx(styles.container, props.className)}>
        {keyMap.map(mapping => (
          <div className={styles.column} key={mapping.key}>
            <Note
              className={styles.note}
              shruti={mapping.shruti}
              sthayi={Sthayi.Mid}
            />
            <RoundedGlass
              className={styles.key}
              onClick={() => {
                dispatch(composerActions.setNote(mapping.shruti));
              }}
            >
              {mapping.key}
            </RoundedGlass>
          </div>
        ))}
        <div className={styles.column}>
          <div className={styles.note}>,</div>
          <RoundedGlass
            className={styles.key}
            onClick={() => {
              dispatch(composerActions.setNote(','));
            }}
          >
            <Space className={styles.keyIcon} />
          </RoundedGlass>
        </div>
        <div className={styles.column}>
          <div className={styles.note}>
            <EmptyBlock className={styles.empty} />
          </div>
          <RoundedGlass
            className={styles.key}
            onClick={() => {
              dispatch(composerActions.setNote('del'));
            }}
          >
            <Backspace className={styles.keyIcon} />
          </RoundedGlass>
        </div>
      </div>
    );
  },
  () => true,
);
