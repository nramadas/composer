import { Playlist as PlaylistModel, DEFAULT_DATA } from '#lib/models/Playlist';
import type { Playlist as PlaylistDbModel } from '#server/modules/playlist/entity';

export function entityToModel(dbModel: PlaylistDbModel): PlaylistModel {
  const data = {
    ...DEFAULT_DATA,
    ...dbModel.data,
  };

  return {
    channelId: dbModel.channelId,
    id: dbModel.id,
    isDefault: !!dbModel.isDefaultIn,
    created: dbModel.created,
    ...data,
  };
}
