import { User } from '#lib/models/User';
import { NominalID } from '#lib/type/nominal';

export interface Data {}

export const DEFAULT_DATA: Data = {};

export interface PersonaContributor extends Data {
  belongsToId: User['id'];
  created: Date;
  id: NominalID<'contributor persona'>;
}
