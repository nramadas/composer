import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '#server/modules/user/entity';

import { GqlContextService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [GqlContextService],
  exports: [GqlContextService],
})
export class GqlContextModule {}
