import { Logger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Channel } from '#lib/models/Channel';
import { PersonaContributor } from '#lib/models/PersonaContributor';
import { Playlist } from '#lib/models/Playlist';
import { UploadedAudio } from '#lib/models/UploadedAudio';
import { UploadedImage } from '#lib/models/UploadedImage';

import { StagedTrack } from './entity';
import { entityToModel } from './entityToModel';

@Injectable()
export class StagedTrackService {
  private readonly logger = new Logger(StagedTrackService.name);

  constructor(
    @InjectRepository(StagedTrack)
    private readonly stagedTrackRepository: Repository<StagedTrack>,
  ) {}

  async create(
    audio: UploadedAudio,
    channelId: Channel['id'],
    coverArt: UploadedImage | undefined,
    creatorId: PersonaContributor['id'],
    playlistId: Playlist['id'],
    title: string,
  ) {
    const track = this.stagedTrackRepository.create({
      channelId,
      creatorId,
      playlistId,
      data: {
        audio,
        coverArt,
        title,
      },
    });

    await this.stagedTrackRepository.save(track);

    return entityToModel(track);
  }
}
