import cx from 'classnames';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { Body2 } from '#components/typography/Body2';
import { H5 } from '#components/typography/H5';
import { PageRoute } from '#lib/constants/Route';
import { useDispatch } from '#lib/hooks/useDispatch';
import { Composition as CompositionModel } from '#lib/models/Composition';
import { raagaToName } from '#lib/raagaToName';
import { composerActions } from '#lib/redux/actions';
import { taalaToName } from '#lib/taalaToName';
import { compositionToState } from '#lib/transformComposition';

import styles from './index.module.scss';

interface Props {
  className?: string;
  composition: CompositionModel;
}

export function Composition(props: Props) {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <button
      className={cx(styles.container, props.className)}
      onClick={() => {
        dispatch(composerActions.set(compositionToState(props.composition)));
        history.push(PageRoute.Compose);
      }}
    >
      <header
        className={cx(styles.title, {
          [styles.noTitle]: !props.composition.title,
        })}
      >
        <H5>{props.composition.title || 'Untitled'}</H5>
      </header>
      <div className={styles.meta}>
        <Body2 className={styles.label}>Rāga:</Body2>
        <Body2 className={styles.info}>
          {raagaToName(
            props.composition.raaga,
            props.composition.useDikshitarNames,
          )}
        </Body2>
        <Body2 className={styles.label}>Tāla:</Body2>
        <Body2 className={styles.info}>
          {taalaToName(props.composition.taala)}
        </Body2>
      </div>
    </button>
  );
}
