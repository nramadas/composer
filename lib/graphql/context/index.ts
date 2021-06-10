import { User } from '#lib/models/User';

export interface GraphQLContext {
  me: User | null;
}
