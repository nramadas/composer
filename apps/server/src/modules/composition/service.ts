import { Logger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Composition as CompositionModel } from '#lib/models/Composition';
import { User } from '#lib/models/User';

import { Composition } from './entity';
import { entityToModel } from './entityToModel';

@Injectable()
export class CompositionService {
  private readonly logger = new Logger(CompositionService.name);

  constructor(
    @InjectRepository(Composition)
    private readonly compositionRepository: Repository<Composition>,
  ) {}

  async delete(userId: User['id'], key: CompositionModel['key']) {
    const composition = await this.compositionRepository.findOne({
      where: { belongsToId: userId, key },
    });

    if (composition) {
      const result = entityToModel(composition);
      await this.compositionRepository.delete(composition.id);
      return result;
    }

    return null;
  }

  async get(id: Composition['id']) {
    const composition = await this.compositionRepository.findOne({
      where: { id },
    });
    return composition ? entityToModel(composition) : null;
  }

  async getAll(userId: User['id']) {
    const compositions = await this.compositionRepository.find({
      where: { belongsToId: userId },
    });
    return compositions.map(entityToModel);
  }

  async put(userId: User['id'], model: CompositionModel) {
    const existingComposition = await this.compositionRepository.findOne({
      where: { belongsToId: userId, key: model.key },
    });

    if (existingComposition) {
      existingComposition.data = model;
      await this.compositionRepository.save(existingComposition);
      return entityToModel(existingComposition);
    }

    const newComposition = this.compositionRepository.create({
      belongsToId: userId,
      data: model,
      key: model.key,
    });

    await this.compositionRepository.save(newComposition);
    return entityToModel(newComposition);
  }
}
