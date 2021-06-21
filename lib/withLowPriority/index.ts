import { inNewCallstack } from '#lib/inNewCallstack';

export function withLowPriority<F extends (...args: any) => any>(cb: F) {
  if (typeof window === 'undefined' || !('requestIdleCallback' in window)) {
    return inNewCallstack(cb);
  }

  return new Promise<ReturnType<typeof cb>>(res => {
    window.requestIdleCallback(() => res(cb()));
  });
}
