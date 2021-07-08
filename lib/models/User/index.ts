import { Language } from '#lib/models/Language';
import { NominalID } from '#lib/type/nominal';

export interface Data {
  preferredLanguage?: Language;
}

export const DEFAULT_DATA: Data = {};

export interface User extends Data {
  activated: boolean;
  created: Date;
  email: string;
  id: NominalID<'user'>;
}
