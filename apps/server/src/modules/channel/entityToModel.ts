import { Channel as ChannelModel, DEFAULT_DATA } from '#lib/models/Channel';
import type { Channel as ChannelDbModel } from '#server/modules/channel/entity';

export function entityToModel(dbModel: ChannelDbModel): ChannelModel {
  const data = {
    ...DEFAULT_DATA,
    ...dbModel.data,
  };

  return {
    createdById: dbModel.createdById,
    id: dbModel.id,
    created: dbModel.created,
    ...data,
  };
}
