import { Module } from '@nestjs/common';

import { PermissionService } from './service';

@Module({
  imports: [],
  providers: [PermissionService],
  exports: [PermissionService],
})
export class PermissionModule {}
