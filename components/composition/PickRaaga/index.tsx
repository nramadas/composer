import cx from 'classnames';
import React from 'react';

import { Scale } from '#components/composition/Scale';
import { Checkmark } from '#components/icons/Checkmark';
import { Body2 } from '#components/typography/Body2';
import { H3 } from '#components/typography/H3';
import { Overline } from '#components/typography/Overline';
import { useDispatch } from '#lib/hooks/useDispatch';
import { useSelector } from '#lib/hooks/useSelector';
import { JanyaRaaga, MelakartaRaaga } from '#lib/models/Raaga';
import { janyaRaagaToEnglish } from '#lib/raagaToName/janyaRaagaToEnglish';
import { janyaRaagaToEnglishMuthu } from '#lib/raagaToName/janyaRaagaToEnglishMuthu';
import { melakartaRaagaToEnglish } from '#lib/raagaToName/melakartaRaagaToEnglish';
import { melakartaRaagaToEnglishMuthu } from '#lib/raagaToName/melakartaRaagaToEnglishMuthu';
import { composerActions } from '#lib/redux/actions';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function PickRaaga(props: Props) {
  const dispatch = useDispatch();
  const { selectedRaaga, useDikshitarNames } = useSelector(state => ({
    selectedRaaga: state.composition.raaga,
    useDikshitarNames: state.composition.useDikshitarNames,
  }));

  return (
    <div className={cx(props.className, styles.container)}>
      <header>
        <H3 className={styles.header}>Select Rāga</H3>
      </header>
      <article className={styles.raagas}>
        <Overline className={styles.sectionHeader}>Mēḷakarta</Overline>
        <div className={styles.grid}>
          {Object.values(MelakartaRaaga)
            .sort()
            .map(raaga => (
              <button
                className={cx(styles.selectRaaga, {
                  [styles.selected]: raaga === selectedRaaga,
                })}
                onClick={() => {
                  dispatch(composerActions.setRaaga(raaga));
                }}
              >
                <div className={styles.scaleNameContainer}>
                  <Body2>
                    {useDikshitarNames
                      ? melakartaRaagaToEnglishMuthu(raaga)
                      : melakartaRaagaToEnglish(raaga)}
                  </Body2>
                  {raaga === selectedRaaga && (
                    <Checkmark className={styles.selectIcon} />
                  )}
                </div>
                <Scale className={styles.scale} raaga={raaga} style="aa" />
                <Scale className={styles.scale} raaga={raaga} style="av" />
              </button>
            ))}
        </div>
        <Overline className={styles.sectionHeader}>Janya</Overline>
        <div className={styles.grid}>
          {Object.values(JanyaRaaga)
            .sort()
            .map(raaga => (
              <button
                className={cx(styles.selectRaaga, {
                  [styles.selected]: raaga === selectedRaaga,
                })}
                onClick={() => {
                  dispatch(composerActions.setRaaga(raaga));
                }}
              >
                <div className={styles.scaleNameContainer}>
                  <Body2>
                    {useDikshitarNames
                      ? janyaRaagaToEnglishMuthu(raaga)
                      : janyaRaagaToEnglish(raaga)}
                  </Body2>
                  {raaga === selectedRaaga && (
                    <Checkmark className={styles.selectIcon} />
                  )}
                </div>
                <Scale className={styles.scale} raaga={raaga} style="aa" />
                <Scale className={styles.scale} raaga={raaga} style="av" />
              </button>
            ))}
        </div>
      </article>
    </div>
  );
}
