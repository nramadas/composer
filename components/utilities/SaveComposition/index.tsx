import { useEffect, useRef } from 'react';
import { useMutation } from 'urql';

import { useSelector } from '#lib/hooks/useSelector';
import { stateToComposition } from '#lib/transformComposition';
import { withLowPriority } from '#lib/withLowPriority';

import saveCompositionMutation from './saveComposition.gql';

export function SaveComposition() {
  const [, saveComposition] = useMutation(saveCompositionMutation);
  const compositionState = useSelector(state => ({
    blocks: state.composition.blocks,
    composer: state.composition.composer,
    document: state.composition.document,
    key: state.composition.key,
    raaga: state.composition.raaga,
    sectionTitles: state.composition.sectionTitles,
    taala: state.composition.taala,
    title: state.composition.title,
    useDikshitarNames: state.composition.useDikshitarNames,
  }));

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

      saveComposition({ composition });
    }, 5000);
  });

  useEffect(() => {
    getCompositionState.current = () => compositionState;
    save.current();
  }, [compositionState]);

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      const composition = stateToComposition(getCompositionState.current());
      saveComposition({ composition });
    };
  }, []);

  return null;
}
