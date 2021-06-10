import { Field, ObjectType } from 'type-graphql';

import { SideEffect as SideEffectModel } from './index';

@ObjectType({ description: 'A side effect' })
export class SideEffect implements SideEffectModel {
  @Field({
    description: 'The side effect completed',
  })
  ok!: boolean;
}
