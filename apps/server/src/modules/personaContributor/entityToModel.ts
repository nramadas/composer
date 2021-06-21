import {
  PersonaContributor as PersonaContributorModel,
  DEFAULT_DATA,
} from '#lib/models/PersonaContributor';
import type { PersonaContributor as PersonaContributorDbModel } from '#server/modules/personaContributor/entity';

export function entityToModel(
  dbModel: PersonaContributorDbModel,
): PersonaContributorModel {
  const data = {
    ...DEFAULT_DATA,
    ...dbModel.data,
  };

  return {
    belongsToId: dbModel.belongsToId,
    id: dbModel.id,
    created: dbModel.created,
    ...data,
  };
}
