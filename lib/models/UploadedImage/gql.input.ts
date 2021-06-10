import { Field, InputType } from 'type-graphql';

import { ImageMimeType } from '#lib/models/ImageMimeType/gql';

import { UploadedImage as UploadedImageModel } from './index';

@InputType({ description: 'An uploaded image file' })
export class UploadedImageInput implements UploadedImageModel {
  @Field({ description: 'Name of the file' })
  filename!: string;

  @Field({ description: 'URI for the file' })
  location!: string;

  @Field(type => ImageMimeType, { description: 'What type of image it is' })
  mimeType!: ImageMimeType;
}
