import { AudioMimeType } from '#lib/models/AudioMimeType';
import { Channel } from '#lib/models/Channel';
import { PersonaContributor } from '#lib/models/PersonaContributor';
import { Playlist } from '#lib/models/Playlist';
import { UploadedAudio } from '#lib/models/UploadedAudio';
import { UploadedImage } from '#lib/models/UploadedImage';
import { NominalID } from '#lib/type/nominal';

export interface Data {
  audio: UploadedAudio;
  coverArt?: UploadedImage;
  title: string;
  waveform: number[];
}

export const DEFAULT_DATA: Data = {
  audio: {
    filename: '',
    location: '',
    mimeType: AudioMimeType.Ogg,
  },
  title: '',
  waveform: [],
};

export interface Track extends Data {
  channelId: Channel['id'];
  created: Date;
  creatorId: PersonaContributor['id'];
  id: NominalID<'track'>;
  playlistId: Playlist['id'];
}
