import { Logger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { extractAuthId } from '#lib/authn/token';
import { GraphQLContext } from '#lib/graphql/context';
import { User } from '#server/modules/user/entity';
import { entityToModel } from '#server/modules/user/entityToModel';

const DEFAULT_CONTEXT: GraphQLContext = {
  me: null,
};

interface Headers {
  authorization?: string;
}

@Injectable()
export class GqlContextService {
  private readonly logger = new Logger(GqlContextService.name);

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async fromHeaders<H extends Headers>(headers: H): Promise<GraphQLContext> {
    if (!headers.authorization) {
      return DEFAULT_CONTEXT;
    }

    const [, jwt] = headers.authorization.split('Bearer ');

    try {
      const authId = await extractAuthId(jwt);

      if (!authId) {
        return DEFAULT_CONTEXT;
      }

      const user = await this.userRepository.findOne({
        where: { authId },
      });

      if (!user) {
        return DEFAULT_CONTEXT;
      }

      return { me: entityToModel(user) };
    } catch (e) {
      this.logger.error('Could not establish graphql context', e.toString());
      return DEFAULT_CONTEXT;
    }
  }
}
