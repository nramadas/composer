import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Playlist } from './entity';
import { PlaylistService } from './service';

const PlaylistRepository = TypeOrmModule.forFeature([Playlist]);

@Module({
  imports: [PlaylistRepository],
  providers: [PlaylistService],
  exports: [PlaylistRepository, PlaylistService],
})
export class PlaylistModule {}
