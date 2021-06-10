import { Module } from '@nestjs/common';

import { UserModule } from '#server/modules/user';

import { AuthnResolver } from './resolver';
import { AuthnService } from './service';

@Module({
  imports: [UserModule],
  providers: [AuthnService, AuthnResolver],
})
export class AuthnModule {}
