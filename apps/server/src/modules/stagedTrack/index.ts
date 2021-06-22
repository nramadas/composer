import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ChannelModule } from '#server/modules/channel';
import { ChannelService } from '#server/modules/channel/service';
import { FileUploadModule } from '#server/modules/fileUpload';
import { FileUploadService } from '#server/modules/fileUpload/service';
import { PersonaContributorModule } from '#server/modules/personaContributor';
import { PersonaContributorService } from '#server/modules/personaContributor/service';
import { PlaylistModule } from '#server/modules/playlist';
import { PlaylistService } from '#server/modules/playlist/service';

import { StagedTrack } from './entity';
import { StagedTrackMutationResolver } from './mutation';
import { StagedTrackService } from './service';

@Module({
  imports: [
    TypeOrmModule.forFeature([StagedTrack]),
    ChannelModule,
    FileUploadModule,
    PersonaContributorModule,
    PlaylistModule,
  ],
  providers: [
    ChannelService,
    FileUploadService,
    PersonaContributorService,
    PlaylistService,
    StagedTrackService,
    StagedTrackMutationResolver,
  ],
  exports: [],
})
export class StagedTrackModule {}
