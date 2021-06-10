import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entity';
import { UserMutationResolver } from './mutation';
import { UserQueryResolver } from './query';
import { UserResolver } from './resolver';
import { UserService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UserService,
    UserResolver,
    UserQueryResolver,
    UserMutationResolver,
  ],
  exports: [UserService],
})
export class UserModule {}
