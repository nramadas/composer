import {
  StagedTrack as StagedTrackModel,
  DEFAULT_DATA,
} from '#lib/models/StagedTrack';
import type { StagedTrack as StagedTrackDbModel } from '#server/modules/stagedTrack/entity';

export function entityToModel(dbModel: StagedTrackDbModel): StagedTrackModel {
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
