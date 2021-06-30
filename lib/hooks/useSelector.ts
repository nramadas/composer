import memoize from 'proxy-memoize';
import { DependencyList, useCallback } from 'react';
import {
  TypedUseSelectorHook,
  useSelector as baseUseSelector,
} from 'react-redux';

import type { RootState } from '#lib/redux/store';

const useTypedSelector: TypedUseSelectorHook<RootState> = baseUseSelector;

type Selector = Parameters<typeof useTypedSelector>[0];

export function useSelector<S extends Selector>(
  selector: S,
  deps?: DependencyList,
  cacheSize?: number,
) {
  return useTypedSelector(
    useCallback(memoize(selector, { size: cacheSize }), deps || []),
  ) as ReturnType<S>;
}
