import cx from 'classnames';
import React, { memo } from 'react';

import { Scale } from '#components/composition/Scale';
import { Checkmark } from '#components/icons/Checkmark';
import { Body2 } from '#components/typography/Body2';
import { useDispatch } from '#lib/hooks/useDispatch';
import { useSelector } from '#lib/hooks/useSelector';
import { MelakartaRaaga, JanyaRaaga } from '#lib/models/Raaga';
import { raagaToName } from '#lib/raagaToName';
import { composerActions } from '#lib/redux/actions';

import styles from './index.module.scss';

interface Props {
  className?: string;
  raaga: JanyaRaaga | MelakartaRaaga;
}

export const Raaga = memo(
  function Raaga(props: Props) {
    const dispatch = useDispatch();
    const { selected, useDikshitarNames } = useSelector(
      state => ({
        selected: state.composition.raaga === props.raaga,
        useDikshitarNames: state.composition.useDikshitarNames,
      }),
      [props.raaga],
    );

    return (
      <button
        className={cx(styles.selectRaaga, {
          [styles.selected]: selected,
        })}
        onClick={() => {
          dispatch(composerActions.setRaaga(props.raaga));
        }}
      >
        <div className={styles.scaleNameContainer}>
          <Body2>{raagaToName(props.raaga, useDikshitarNames)}</Body2>
          {selected && <Checkmark className={styles.selectIcon} />}
        </div>
        <Scale className={styles.scale} raaga={props.raaga} style="aa" />
        <Scale className={styles.scale} raaga={props.raaga} style="av" />
      </button>
    );
  },
  (prev, next) => prev.raaga === next.raaga,
);
