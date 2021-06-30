import { useDispatch as baseUseDispatch } from 'react-redux';

import type { AppDispatch } from '#lib/redux/store';

export function useDispatch() {
  return baseUseDispatch<AppDispatch>();
}
