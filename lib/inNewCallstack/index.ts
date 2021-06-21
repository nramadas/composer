export function inNewCallstack<F extends (...args: any) => any>(cb: F) {
  return new Promise<ReturnType<typeof cb>>(res => {
    setTimeout(() => res(cb()));
  });
}
