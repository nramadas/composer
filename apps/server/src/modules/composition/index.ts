import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Composition } from './entity';
import { CompositionMutationResolver } from './mutation';
import { CompositionQueryResolver } from './query';
import { CompositionService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Composition])],
  providers: [
    CompositionService,
    CompositionMutationResolver,
    CompositionQueryResolver,
  ],
  exports: [],
})
export class CompositionModule {}
