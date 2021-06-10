import { Field, ObjectType } from 'type-graphql';

import { VideoMimeType } from '#lib/models/VideoMimeType/gql';

import { UploadedVideo as UploadedVideoModel } from './index';

@ObjectType({ description: 'An uploaded video file' })
export class UploadedVideo implements UploadedVideoModel {
  @Field({ description: 'Name of the file' })
  filename!: string;

  @Field({ description: 'URI for the file' })
  location!: string;

  @Field(type => VideoMimeType, { description: 'What type of video it is' })
  mimeType!: VideoMimeType;
}
