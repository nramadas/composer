import { Channel } from '#lib/models/Channel';
import { NominalID } from '#lib/type/nominal';

export interface Data {
  name: string;
}

export const DEFAULT_DATA: Data = {
  name: 'default',
};

export interface Playlist extends Data {
  channelId: Channel['id'];
  created: Date;
  isDefault: boolean;
  id: NominalID<'playlist'>;
}
