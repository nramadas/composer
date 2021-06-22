import { Logger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '#lib/models/User';

import { PersonaContributor } from './entity';
import { entityToModel } from './entityToModel';

@Injectable()
export class PersonaContributorService {
  private readonly logger = new Logger(PersonaContributorService.name);

  constructor(
    @InjectRepository(PersonaContributor)
    private readonly personaContributorRespository: Repository<PersonaContributor>,
  ) {}

  async getContributorPersona(userId: User['id']) {
    const persona = await this.personaContributorRespository.findOne({
      where: { belongsToId: userId },
    });

    if (persona) {
      return entityToModel(persona);
    }

    const newPersona = this.personaContributorRespository.create({
      belongsToId: userId,
      data: {},
    });

    await this.personaContributorRespository.save(newPersona);
    return entityToModel(newPersona);
  }
}
