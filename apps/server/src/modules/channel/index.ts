import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Channel } from './entity';
import { ChannelService } from './service';

const ChannelRepository = TypeOrmModule.forFeature([Channel]);

@Module({
  imports: [ChannelRepository],
  providers: [ChannelService],
  exports: [ChannelRepository, ChannelService],
})
export class ChannelModule {}
