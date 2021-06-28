import { Field, ObjectType } from 'type-graphql';

import { NoteLength } from '#lib/models/NoteLength/gql';
import { Shruti } from '#lib/models/Shruti/gql';
import { Sthayi } from '#lib/models/Sthayi/gql';

import { Swara as SwaraModel } from './index';

@ObjectType()
export class Swara implements SwaraModel {
  @Field(type => NoteLength, { description: 'Length of the note' })
  length!: NoteLength;

  @Field(type => Shruti, { description: 'Note pitch' })
  shruti!: Shruti;

  @Field(type => Sthayi, { description: 'Note octave' })
  sthayi!: Sthayi;
}
