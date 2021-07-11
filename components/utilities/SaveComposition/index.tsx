import cx from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { useMutation } from 'urql';

import { Caption } from '#components/typography/Caption';
import { useSelector } from '#lib/hooks/useSelector';
import { useUserDependentQuery } from '#lib/hooks/useUserDependentQuery';
import { stateToComposition } from '#lib/transformComposition';
import { withLowPriority } from '#lib/withLowPriority';

import fetchUserQuery from './fetchUser.gql';
import styles from './index.module.scss';
import saveCompositionMutation from './saveComposition.gql';

interface Props {
  className?: string;
}

export function SaveComposition(props: Props) {
  const [, saveComposition] = useMutation(saveCompositionMutation);
  const [fetchUserResult] = useUserDependentQuery({ query: fetchUserQuery });
  const compositionState = useSelector(state => ({
    blocks: state.composition.blocks,
    composer: state.composition.composer,
    document: state.composition.document,
    key: state.composition.key,
    lastUpdate: state.composition.lastUpdate,
    raaga: state.composition.raaga,
    sectionTitles: state.composition.sectionTitles,
    taala: state.composition.taala,
    title: state.composition.title,
    useDikshitarNames: state.composition.useDikshitarNames,
  }));
  const [saveCount, setSaveCount] = useState(0);

  const getCompositionState = useRef(() => compositionState);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const save = useRef(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(async () => {
      const composition = await withLowPriority(() =>
        stateToComposition(getCompositionState.current()),
      );

      setSaveCount(count => count + 1);
      saveComposition({ composition });
    }, 3000);
  });

  const userIsActivated = !!fetchUserResult.data?.me?.activated;

  useEffect(() => {
    if (!userIsActivated) {
      return;
    }

    getCompositionState.current = () => compositionState;
    save.current();
  }, [compositionState, userIsActivated]);

  useEffect(() => {
    return () => {
      if (!userIsActivated) {
        return;
      }

      if (timer.current) {
        clearTimeout(timer.current);
      }

      const composition = stateToComposition(getCompositionState.current());
      saveComposition({ composition });
    };
  }, [userIsActivated]);

  if (saveCount > 1) {
    return (
      <div className={cx(props.className, styles.container)} key={saveCount}>
        <Caption>Autosaving...</Caption>
      </div>
    );
  }

  return null;
}
