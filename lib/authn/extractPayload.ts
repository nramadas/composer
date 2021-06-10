import { decode } from '#lib/base64';

interface Payload {
  aud: string[];
  auth_time: number;
  exp: number;
  iat: number;
  iss: number;
  sub: string;
}

export function extractPayload(token: string) {
  const [, payloadEncodedStr] = token.split('.');

  try {
    const payloadStr = decode(payloadEncodedStr);
    return JSON.parse(payloadStr) as Payload;
  } catch (e) {
    return null;
  }
}
