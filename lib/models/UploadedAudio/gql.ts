import { Field, ObjectType } from 'type-graphql';

import { AudioMimeType } from '#lib/models/AudioMimeType/gql';

import { UploadedAudio as UploadedAudioModel } from './index';

@ObjectType({ description: 'An uploaded audio file' })
export class UploadedAudio implements UploadedAudioModel {
  @Field({ description: 'Name of the file' })
  filename!: string;

  @Field({ description: 'URI for the file' })
  location!: string;

  @Field(type => AudioMimeType, { description: 'What type of audio it is' })
  mimeType!: AudioMimeType;
}
