import cx from 'classnames';
import React from 'react';

import { Checkmark } from '#components/icons/Checkmark';
import { Body2 } from '#components/typography/Body2';
import { H3 } from '#components/typography/H3';
import { Overline } from '#components/typography/Overline';
import { useDispatch } from '#lib/hooks/useDispatch';
import { useSelector } from '#lib/hooks/useSelector';
import { ChapuTaala, SuladiSaptaTaala } from '#lib/models/Taala';
import { composerActions } from '#lib/redux/actions';
import { taalaToToName } from '#lib/taalaToName';
import { taalaToSymbols } from '#lib/taalaToSymbols';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function PickTaala(props: Props) {
  const dispatch = useDispatch();
  const { selectedTaala } = useSelector(state => ({
    selectedTaala: state.composition.taala,
  }));

  return (
    <div className={cx(props.className, styles.container)}>
      <header>
        <H3 className={styles.header}>Select Tāla</H3>
      </header>
      <article className={styles.taalas}>
        <Overline className={styles.sectionHeader}>Suladi Sapta Tāla</Overline>
        <div className={styles.grid}>
          {Object.values(SuladiSaptaTaala)
            .sort()
            .map(taala => (
              <button
                className={cx(styles.selectTaala, {
                  [styles.selected]: taala === selectedTaala,
                })}
                key={taala}
                onClick={() => {
                  dispatch(composerActions.setTaala(taala));
                }}
              >
                <div className={styles.taalaNameContainer}>
                  <Body2>{taalaToToName(taala)}</Body2>
                  {taala === selectedTaala && (
                    <Checkmark className={styles.selectIcon} />
                  )}
                </div>
                <div className={styles.symbols}>{taalaToSymbols(taala)}</div>
              </button>
            ))}
        </div>
        <Overline className={styles.sectionHeader}>Chapu Tāla</Overline>
        <div className={styles.grid}>
          {Object.values(ChapuTaala)
            .sort()
            .map(taala => (
              <button
                className={cx(styles.selectTaala, {
                  [styles.selected]: taala === selectedTaala,
                })}
                key={taala}
                onClick={() => {
                  dispatch(composerActions.setTaala(taala));
                }}
              >
                <div className={styles.taalaNameContainer}>
                  <Body2>{taalaToToName(taala)}</Body2>
                  {taala === selectedTaala && (
                    <Checkmark className={styles.selectIcon} />
                  )}
                </div>
                <div className={styles.symbols}>{taalaToSymbols(taala)}</div>
              </button>
            ))}
        </div>
      </article>
    </div>
  );
}
