import cx from 'classnames';
import React from 'react';

import { Note } from '#components/composition/Note';
import { RoundedGlass } from '#components/controls/buttons/raised/RoundedGlass';
import { Body2 } from '#components/typography/Body2';
import { useDispatch } from '#lib/hooks/useDispatch';
import { useSelector } from '#lib/hooks/useSelector';
import { Shruti } from '#lib/models/Shruti';
import { Sthayi } from '#lib/models/Sthayi';
import { composerActions } from '#lib/redux/actions';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function PickSthayi(props: Props) {
  const dispatch = useDispatch();
  const selected = useSelector(state => {
    const headCur = state.composition.cursorPosition[0];
    const head = state.composition.document.allBlocks[headCur];
    return head.sthayi || state.composition.defaultSthayi;
  });

  return (
    <div className={cx(props.className, styles.container)}>
      <Body2>Sthāyi:</Body2>
      {(
        [
          [Sthayi.Sub2, 'Anumandra\n(shift + 1)'],
          [Sthayi.Sub1, 'Mandra\n(shift + 2)'],
          [Sthayi.Mid, 'Madhya\n(shift + 3)'],
          [Sthayi.Up1, 'Tara\n(shift + 4)'],
          [Sthayi.Up2, 'Athithara\n(shift + 5)'],
        ] as const
      ).map(([sthayi, infotext]) => (
        <RoundedGlass
          className={styles.button}
          infotext={infotext}
          key={sthayi}
          selected={selected === sthayi}
          onClick={() => dispatch(composerActions.setSthayi(sthayi))}
        >
          <Note shruti={Shruti.S} sthayi={sthayi} />
        </RoundedGlass>
      ))}
    </div>
  );
}
