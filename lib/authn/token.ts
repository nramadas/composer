import { AuthN } from '@keratin/authn-node';

export const authn = (() => {
  let instance: AuthN | undefined = undefined;

  return () => {
    if (!instance) {
      instance = new AuthN({
        issuer: process.env.AUTHN_URL!,
        audiences: process.env.APP_DOMAINS!.split(','),
        username: process.env.HTTP_AUTH_USERNAME!,
        password: process.env.HTTP_AUTH_PASSWORD!,
      });
    }

    return instance;
  };
})();

export function extractAuthId(token: string) {
  return authn().subjectFrom(token);
}
