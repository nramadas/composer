import { PersonaContributor } from '#lib/models/PersonaContributor';
import { NominalID } from '#lib/type/nominal';

export interface Data {}

export const DEFAULT_DATA: Data = {};

export interface Channel extends Data {
  createdById: PersonaContributor['id'];
  created: Date;
  id: NominalID<'contributor persona'>;
}
