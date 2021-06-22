import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PersonaContributor } from './entity';
import { PersonaContributorService } from './service';

const PersonaContributorRepository = TypeOrmModule.forFeature([
  PersonaContributor,
]);

@Module({
  imports: [PersonaContributorRepository],
  providers: [PersonaContributorService],
  exports: [PersonaContributorRepository, PersonaContributorService],
})
export class PersonaContributorModule {}
