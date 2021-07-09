import { GraphQLJSON, GraphQLJSONObject } from 'graphql-type-json';
import { Field, ID, ObjectType } from 'type-graphql';

import { Block } from '#lib/models/Block';

import { Composition as CompositionModel } from './index';

@ObjectType({ description: 'A composition' })
export class Composition implements CompositionModel {
  @Field(type => GraphQLJSON)
  blocks!: Block[][];

  @Field()
  composer!: string;

  @Field(type => ID)
  key!: CompositionModel['key'];

  @Field()
  lastUpdate!: number;

  @Field(type => String)
  raaga!: CompositionModel['raaga'];

  @Field(type => GraphQLJSONObject)
  sectionTitles!: CompositionModel['sectionTitles'];

  @Field(type => String)
  taala!: CompositionModel['taala'];

  @Field()
  title!: string;

  @Field()
  useDikshitarNames!: boolean;
}
