import { PersonaContributor } from '#lib/models/PersonaContributor';
import { Playlist } from '#lib/models/Playlist';
import { NominalID } from '#lib/type/nominal';

export interface Data {
  name: string;
}

export const DEFAULT_DATA: Data = {
  name: 'default',
};

export interface Channel extends Data {
  createdById: PersonaContributor['id'];
  created: Date;
  defaultPlaylistId?: Playlist['id'];
  id: NominalID<'channel'>;
  isDefault: boolean;
}
