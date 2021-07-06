import cx from 'classnames';
import React from 'react';

import { RoundedGlass } from '#components/controls/buttons/raised/RoundedGlass';
import { Body2 } from '#components/typography/Body2';
import { fixPrecision } from '#lib/fixPrecision';
import { useDispatch } from '#lib/hooks/useDispatch';
import { useSelector } from '#lib/hooks/useSelector';
import { Block } from '#lib/models/Block';
import { composerActions } from '#lib/redux/actions';

import styles from './index.module.scss';

function isInt(num: number) {
  const fixed = fixPrecision(num);
  return Math.floor(fixed) === fixed;
}

interface Props {
  className?: string;
}

export function PickMaatraa(props: Props) {
  const dispatch = useDispatch();
  const { selected, selectedLength } = useSelector(state => {
    const styles = state.composition.cursorPosition.map(cur => {
      return state.composition.document.allBlocks[cur].style;
    });

    let selected: Block['style'] | undefined = styles[0];
    let selectedLength = 0;

    for (let i = 0; i < styles.length; i++) {
      selectedLength += 1 / styles[i];
      if (selected !== styles[i]) {
        selected = undefined;
      }
    }

    if (selectedLength > 1) {
      selected = undefined;
    }

    return { selected, selectedLength };
  });

  return (
    <div className={cx(props.className, styles.container)}>
      <Body2>Mātrā:</Body2>
      {(
        [
          [1, '1', 'Whole\n(ctrl / ⌘ + 1)'],
          [2, '½', 'Half\n(ctrl / ⌘ + 2)'],
          [3, '⅓', 'Triplet\n(ctrl / ⌘ + 3)'],
          [4, '¼', 'Quarter\n(ctrl / ⌘ + 4)'],
          [6, '⅙', 'Sixth\n(ctrl / ⌘ + 5)'],
        ] as const
      ).map(([length, text, infotext]) => {
        const disabled =
          selectedLength > 1 ||
          (length === 1
            ? selectedLength < 1
            : !isInt(selectedLength / (1 / length)));

        return (
          <RoundedGlass
            className={styles.button}
            disabled={disabled}
            infotext={infotext}
            key={length}
            selected={selected === length}
            onClick={() => {
              if (!disabled && selected !== length) {
                dispatch(composerActions.setMaatraa(length));
              }
            }}
          >
            {text}
          </RoundedGlass>
        );
      })}
    </div>
  );
}
