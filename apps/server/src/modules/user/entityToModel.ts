import { User as UserModel, DEFAULT_DATA } from '#lib/models/User';
import type { User as UserDbModel } from '#server/modules/user/entity';

export function entityToModel(dbModel: UserDbModel): UserModel {
  const data = {
    ...DEFAULT_DATA,
    ...dbModel.data,
  };

  return {
    id: dbModel.id,
    created: dbModel.created,
    email: dbModel.email,
    ...data,
  };
}
