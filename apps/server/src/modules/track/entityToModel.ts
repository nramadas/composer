import { Track as TrackModel, DEFAULT_DATA } from '#lib/models/Track';
import type { Track as TrackDbModel } from '#server/modules/track/entity';

export function entityToModel(dbModel: TrackDbModel): TrackModel {
  const data = {
    ...DEFAULT_DATA,
    ...dbModel.data,
  };

  return {
    channelId: dbModel.channelId,
    created: dbModel.created,
    creatorId: dbModel.creatorId,
    id: dbModel.id,
    playlistId: dbModel.playlistId,
    ...data,
  };
}
