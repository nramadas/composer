import { Logger, Injectable } from '@nestjs/common';

import { User } from '#lib/models/User';

@Injectable()
export class PermissionService {
  private readonly logger = new Logger(PermissionService.name);

  async userCanContribute(userId: User['id']) {
    return false;
  }

  async userCanModerate(userId: User['id']) {
    return false;
  }
}
