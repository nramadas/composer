import pako from 'pako';

import { decode, encode } from '#lib/base64';

export function compress(obj: any) {
  return 'v1.' + encode(pako.deflate(JSON.stringify(obj), { level: 5 }) as any);
}
export function decompress<O>(str: string) {
  const [version, payload] = str.split('.');

  const arr = Uint8Array.from(
    decode(payload)
      .split(',')
      .map(s => parseInt(s, 10)),
  );
  return JSON.parse(pako.inflate(arr, { to: 'string' })) as O;
}
