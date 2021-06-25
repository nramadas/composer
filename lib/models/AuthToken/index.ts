import { Nominal } from '#lib/type/nominal';

export interface AuthToken {
  refresh: Nominal<string, 'refresh token'>;
  session: Nominal<string, 'session token'>;
}
