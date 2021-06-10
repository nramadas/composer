import { Field, ObjectType } from 'type-graphql';

import { ImageMimeType } from '#lib/models/ImageMimeType/gql';

import { UploadedImage as UploadedImageModel } from './index';

@ObjectType({ description: 'An orphan, uploaded file' })
export class UploadedImage implements UploadedImageModel {
  @Field({ description: 'Name of the file' })
  filename!: string;

  @Field({ description: 'URI for the file' })
  location!: string;

  @Field(type => ImageMimeType, { description: 'What type of image it is' })
  mimeType!: ImageMimeType;
}
