import { Logger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User as UserModel, Data } from '#lib/models/User';
import { PartialPick } from '#lib/type/PartialPick';

import { User } from './entity';
import { entityToModel } from './entityToModel';

type EditableData = Pick<UserModel, 'id'> & Data;

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async activateUser(id: User['id']) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (user) {
      user.activated = true;
      await this.userRepository.save(user);
      return true;
    }

    return false;
  }

  async create(model: Partial<Data> & { authId: string; email: string }) {
    const { authId, email, ...data } = model;
    const user = this.userRepository.create({
      authId,
      email,
      data,
      activated: false,
    });
    await this.userRepository.save(user);
    this.logger.verbose(`Created a new user with id ${user.id}`);
    return entityToModel(user);
  }

  async findById(id: User['id']) {
    const user = await this.userRepository.findOne({ where: { id } });
    return user ? entityToModel(user) : null;
  }

  async update(model: PartialPick<EditableData, 'id'>) {
    const { id, ...data } = model;
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      return null;
    } else {
      user.data = data;
      await this.userRepository.save(user);
      this.logger.verbose(`Updated user ${user.id}`);
      return entityToModel(user);
    }
  }
}
