import {
  createUnionType,
  Field,
  ID,
  ObjectType,
  registerEnumType,
} from 'type-graphql';

import { Shruti } from '#lib/models/Shruti/gql';
import { Sthayi } from '#lib/models/Sthayi/gql';

import {
  BlockType,
  ContinueBlock as ContinueBlockModel,
  NoteBlock as NoteBlockModel,
  UndefinedBlock as UndefinedBlockModel,
} from './index';

registerEnumType(BlockType, {
  name: 'BlockType',
  description: 'BlockType',
});

@ObjectType({ description: 'Continues the previous note' })
export class ContinueBlock implements ContinueBlockModel {
  @Field(type => ID)
  key!: string;

  @Field({ nullable: true })
  lyrics?: string;

  @Field(type => ID)
  prev!: string;

  @Field(type => ID)
  next!: string;

  @Field(type => BlockType)
  type!: BlockType.Continue;

  @Field(type => Sthayi, { nullable: true })
  sthayi?: Sthayi;

  @Field(type => Number)
  style!: 1 | 2 | 3 | 4 | 6;
}

@ObjectType({ description: 'A note that produces a sound' })
export class NoteBlock implements NoteBlockModel {
  @Field(type => ID)
  key!: string;

  @Field({ nullable: true })
  lyrics?: string;

  @Field(type => ID)
  prev!: string;

  @Field(type => ID)
  next!: string;

  @Field(type => BlockType)
  type!: BlockType.Note;

  @Field(type => Shruti, { nullable: true })
  shruti!: Shruti;

  @Field(type => Sthayi, { nullable: true })
  sthayi!: Sthayi;

  @Field(type => Number)
  style!: 1 | 2 | 3 | 4 | 6;
}

@ObjectType({ description: 'A note that has not yet been defined' })
export class UndefinedBlock implements UndefinedBlockModel {
  @Field(type => ID)
  key!: string;

  @Field({ nullable: true })
  lyrics?: string;

  @Field(type => ID)
  prev!: string;

  @Field(type => ID)
  next!: string;

  @Field(type => BlockType)
  type!: BlockType.Undefined;

  @Field(type => Shruti, { nullable: true })
  shruti?: Shruti;

  @Field(type => Sthayi, { nullable: true })
  sthayi?: Sthayi;

  @Field(type => Number)
  style!: 1 | 2 | 3 | 4 | 6;
}

export const Block = createUnionType({
  name: 'Block',
  types: () => [ContinueBlock, NoteBlock, UndefinedBlock] as const,
  resolveType: value => {
    if (value.type === BlockType.Continue) {
      return ContinueBlock;
    } else if (value.type === BlockType.Note) {
      return NoteBlock;
    } else {
      return UndefinedBlock;
    }
  },
});
