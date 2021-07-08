import { Composition as CompositionModel } from '#lib/models/Composition';
import type { Composition as CompositionDbModel } from '#server/modules/composition/entity';

export function entityToModel(dbModel: CompositionDbModel): CompositionModel {
  return dbModel.data;
}
