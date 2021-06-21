import { Channel } from '#lib/models/Channel';
import { PersonaContributor } from '#lib/models/PersonaContributor';
import { Playlist } from '#lib/models/Playlist';
import { NominalID } from '#lib/type/nominal';

export interface Data {
  audioSrc: string;
  coverArtSrc?: string;
  title: string;
}

export const DEFAULT_DATA: Data = {
  audioSrc: '',
  title: '',
};

export interface Track extends Data {
  channelId: Channel['id'];
  created: Date;
  creatorId: PersonaContributor['id'];
  id: NominalID<'contributor persona'>;
  playlistId: Playlist['id'];
}
