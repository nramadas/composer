import cx from 'classnames';
import React, { memo } from 'react';

import { Switch } from '#components/controls/Switch';
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
import { Raaga } from './Raaga';

interface Props {
  className?: string;
}

export const PickRaaga = memo(
  function PickRaaga(props: Props) {
    const dispatch = useDispatch();
    const { useDikshitarNames } = useSelector(state => ({
      selectedRaaga: state.composition.raaga,
      useDikshitarNames: state.composition.useDikshitarNames,
    }));

    return (
      <div className={cx(props.className, styles.container)}>
        <header>
          <H3 className={styles.header}>Select Rāga</H3>
        </header>
        <div className={styles.switchRow}>
          <Body2>Use Muthuswami Dikshitar naming scheme:</Body2>
          <Switch
            className={styles.switch}
            value={useDikshitarNames}
            onChange={() =>
              dispatch(composerActions.setDikshitarNaming(!useDikshitarNames))
            }
          />
        </div>
        <article className={styles.raagas}>
          <Overline className={styles.sectionHeader}>Mēḷakarta</Overline>
          <div className={styles.grid}>
            {Object.values(MelakartaRaaga)
              .sort((a, b) => {
                const nameA = useDikshitarNames
                  ? melakartaRaagaToEnglishMuthu(a)
                  : melakartaRaagaToEnglish(a);

                const nameB = useDikshitarNames
                  ? melakartaRaagaToEnglishMuthu(b)
                  : melakartaRaagaToEnglish(b);

                return nameA.localeCompare(nameB);
              })
              .map(raaga => (
                <Raaga key={raaga} raaga={raaga} />
              ))}
          </div>
          <Overline className={styles.sectionHeader}>Janya</Overline>
          <div className={styles.grid}>
            {Object.values(JanyaRaaga)
              .sort((a, b) => {
                const nameA = useDikshitarNames
                  ? janyaRaagaToEnglishMuthu(a)
                  : janyaRaagaToEnglish(a);

                const nameB = useDikshitarNames
                  ? janyaRaagaToEnglishMuthu(b)
                  : janyaRaagaToEnglish(b);

                return nameA.localeCompare(nameB);
              })
              .map(raaga => (
                <Raaga key={raaga} raaga={raaga} />
              ))}
          </div>
        </article>
      </div>
    );
  },
  () => true,
);
