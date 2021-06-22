import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Track } from './entity';

@Module({
  imports: [TypeOrmModule.forFeature([Track])],
  providers: [],
  exports: [],
})
export class TrackModule {}
