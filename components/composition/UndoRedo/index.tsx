import cx from 'classnames';
import React from 'react';

import { RoundedGlass } from '#components/controls/buttons/raised/RoundedGlass';
import { Redo } from '#components/icons/Redo';
import { Undo } from '#components/icons/Undo';
import { useDispatch } from '#lib/hooks/useDispatch';
import { useSelector } from '#lib/hooks/useSelector';
import { composerActions } from '#lib/redux/actions';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function UndoRedo(props: Props) {
  const dispatch = useDispatch();
  const { redoDisabled, undoDisabled } = useSelector(state => ({
    redoDisabled:
      state.composition.history.cursor ===
      state.composition.history.stack.length,
    undoDisabled: state.composition.history.cursor === 0,
  }));

  return (
    <div className={cx(styles.container, props.className)}>
      <RoundedGlass
        className={styles.button}
        disabled={undoDisabled}
        onClick={() => dispatch(composerActions.undo())}
      >
        <Undo className={styles.icon} />
      </RoundedGlass>
      <RoundedGlass
        className={styles.button}
        disabled={redoDisabled}
        onClick={() => dispatch(composerActions.redo())}
      >
        <Redo className={styles.icon} />
      </RoundedGlass>
    </div>
  );
}
