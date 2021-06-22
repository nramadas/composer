import { Logger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PersonaContributor } from '#lib/models/PersonaContributor';

import { Channel } from './entity';
import { entityToModel } from './entityToModel';

@Injectable()
export class ChannelService {
  private readonly logger = new Logger(ChannelService.name);

  constructor(
    @InjectRepository(Channel)
    private readonly channelRepository: Repository<Channel>,
  ) {}

  async canContribute(
    contributorId: PersonaContributor['id'],
    channelId: Channel['id'],
  ) {
    const channel = await this.channelRepository.findOne({
      where: { id: channelId },
      relations: ['additionalContributors'],
    });

    if (!channel) {
      return false;
    }

    if (channel.createdById === contributorId) {
      return true;
    }

    return !!channel.additionalContributors.find(
      contributor => contributor.id === contributorId,
    );
  }

  async getDefaultChannel(contributorId: PersonaContributor['id']) {
    const channel = await this.channelRepository.findOne({
      where: { isDefaultOfId: contributorId },
    });

    if (channel) {
      return entityToModel(channel);
    }

    const defaultChannel = this.channelRepository.create({
      createdById: contributorId,
      data: {},
      isDefaultOfId: contributorId,
    });

    await this.channelRepository.save(defaultChannel);
    this.logger.verbose(`Create a new channel with ID: ${defaultChannel.id}`);

    return entityToModel(defaultChannel);
  }
}
