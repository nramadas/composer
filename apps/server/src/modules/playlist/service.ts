import { Logger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Channel } from '#lib/models/Channel';
import { PersonaContributor } from '#lib/models/PersonaContributor';
import { entityToModel as channelEntityToModel } from '#server/modules/channel/entityToModel';

import { Playlist } from './entity';
import { entityToModel } from './entityToModel';

@Injectable()
export class PlaylistService {
  private readonly logger = new Logger(PlaylistService.name);

  constructor(
    @InjectRepository(Playlist)
    private readonly playlistRepository: Repository<Playlist>,
  ) {}

  async canContribute(
    contributorId: PersonaContributor['id'],
    playlistId: Playlist['id'],
  ) {
    const playlist = await this.playlistRepository.findOne({
      where: { id: playlistId },
      relations: ['channel'],
    });

    if (!playlist) {
      return false;
    }

    if (!playlist.channel) {
      return false;
    }

    if (playlist.channel.createdById === contributorId) {
      return true;
    }

    const allContributors = await playlist.channel.additionalContributors;

    return !!allContributors.find(
      contributor => contributor.id === contributorId,
    );
  }

  async getChannel(playlistId: Playlist['id']) {
    const playlist = await this.playlistRepository.findOne({
      where: { id: playlistId },
      relations: ['channel'],
    });

    if (!playlist) {
      return null;
    }

    return channelEntityToModel(playlist.channel);
  }

  async getDefaultPlaylist(channelId: Channel['id']) {
    const playlist = await this.playlistRepository.findOne({
      where: { isDefaultInId: channelId },
    });

    if (playlist) {
      return entityToModel(playlist);
    }

    const defaultPlaylist = this.playlistRepository.create({
      channelId,
      data: {},
      isDefaultInId: channelId,
    });

    await this.playlistRepository.save(defaultPlaylist);
    this.logger.verbose(`Create a new playlist with ID: ${defaultPlaylist.id}`);

    return entityToModel(defaultPlaylist);
  }
}
