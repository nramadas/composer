import cx from 'classnames';
import React, { memo, useState } from 'react';

import { Input } from '#components/controls/inputs/recessed/Input';
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

const REPLACEMENTS = [
  ['ā', 'a'],
  ['aa', 'a'],
  ['ē', 'e'],
  ['ee', 'e'],
  ['ī', 'i'],
  ['ii', 'i'],
  ['ū', 'u'],
  ['uu', 'u'],
  ['ō', 'o'],
  ['oo', 'o'],
  ['ţ', 't'],
  ['ḷ', 'l'],
  ['ḻ', 'l'],
  ['ṇ', 'n'],
  ['ś‌', 's'],
  ['ṃ', 'm'],
  ['ḍ', 'd'],
] as const;

function clearStr(str: string) {
  let clean = str;

  for (const [letter, sub] of REPLACEMENTS) {
    clean = clean.replaceAll(letter, sub);
  }

  return clean;
}

function hasString(name: string, filterStr: string) {
  if (!filterStr) {
    return true;
  }

  const cleanName = clearStr(name.toLowerCase());
  const cleanFilterStr = clearStr(filterStr.toLowerCase());

  return cleanName.includes(cleanFilterStr);
}

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
    const [filter, setFilter] = useState('');

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
        <Input
          className={styles.filter}
          label="filter"
          value={filter}
          onKeyDown={e => e.stopPropagation()}
          onChange={e => {
            e.stopPropagation();
            setFilter(e.currentTarget.value);
          }}
        />
        <article className={styles.raagas}>
          <Overline className={styles.sectionHeader}>Mēḷakarta</Overline>
          <div className={styles.grid}>
            {Object.values(MelakartaRaaga)
              .map(raaga => ({
                raaga,
                name: useDikshitarNames
                  ? melakartaRaagaToEnglishMuthu(raaga)
                  : melakartaRaagaToEnglish(raaga),
              }))
              .filter(r => hasString(r.name, filter))
              .sort((a, b) => {
                return a.name.localeCompare(b.name);
              })
              .map(({ raaga }) => (
                <Raaga key={raaga} raaga={raaga} />
              ))}
          </div>
          <Overline className={styles.sectionHeader}>Janya</Overline>
          <div className={styles.grid}>
            {Object.values(JanyaRaaga)
              .map(raaga => ({
                raaga,
                name: useDikshitarNames
                  ? janyaRaagaToEnglishMuthu(raaga)
                  : janyaRaagaToEnglish(raaga),
              }))
              .filter(r => hasString(r.name, filter))
              .sort((a, b) => {
                return a.name.localeCompare(b.name);
              })
              .map(({ raaga }) => (
                <Raaga key={raaga} raaga={raaga} />
              ))}
          </div>
        </article>
      </div>
    );
  },
  () => true,
);
