import * as slices from './slices';

type SliceName = keyof typeof slices;

const names = Object.keys(slices) as SliceName[];
export const reducers = names.reduce((acc, name) => {
  const slice = slices[name];
  const reducer = slice.reducer;
  // @ts-ignore
  acc[name] = reducer;
  return acc;
}, {} as { [K in SliceName]: typeof slices[K]['reducer'] });
