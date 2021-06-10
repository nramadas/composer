import { ReadStream } from 'fs';

import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { Arg, Mutation, Resolver } from 'type-graphql';

import { BucketType } from '#lib/constants/AWS';
import * as errors from '#lib/errors/graphql';
import {
  audioExtToMimeType,
  imageExtToMimeType,
  videoExtToMimeType,
} from '#lib/extToMimeType';
import { SideEffect } from '#lib/models/SideEffect/gql';
import { UploadedAudio } from '#lib/models/UploadedAudio/gql';
import { UploadedImage } from '#lib/models/UploadedImage/gql';
import { UploadedVideo } from '#lib/models/UploadedVideo/gql';

import { FileUploadService } from './service';

@Resolver()
export class FileUploadMutation {
  constructor(private readonly fileUploadService: FileUploadService) {}

  private async uploadFile<M>(
    ext: string,
    mimeType: M,
    originalFilename: string,
    readStream: ReadStream,
  ) {
    try {
      const result = await this.fileUploadService.uploadFile({
        ext,
        readStream,
        bucket: BucketType.Staged,
      });

      return {
        mimeType,
        filename: result.filename,
        location: result.location,
      };
    } catch {
      throw new errors.FailedUpload(originalFilename);
    }
  }

  @Mutation(returns => SideEffect, {
    description:
      'Removes an uploaded file. The file must not be live yet, only applies to staged files',
  })
  async deleteFile(@Arg('filename') filename: string) {
    try {
      await this.fileUploadService.removeFile({
        filename,
        bucket: BucketType.Staged,
      });

      return { ok: true };
    } catch {
      throw new errors.CouldNotDelete(filename);
    }
  }

  @Mutation(returns => UploadedAudio, {
    description: 'Ready an audio file for processing',
  })
  async uploadAudio(@Arg('audio', type => GraphQLUpload) audio: FileUpload) {
    const result = await this.fileUploadService.getExtMimeType(
      audio.createReadStream(),
      audioExtToMimeType,
    );

    if (!result.ok) {
      throw new errors.FileTypeNotAllowed(result.ext);
    }

    const { ext, mimeType } = result;

    return this.uploadFile(
      ext,
      mimeType,
      audio.filename,
      audio.createReadStream(),
    );
  }

  @Mutation(returns => UploadedImage, {
    description: 'Ready an image for processing',
  })
  async uploadImage(@Arg('image', type => GraphQLUpload) image: FileUpload) {
    const result = await this.fileUploadService.getExtMimeType(
      image.createReadStream(),
      imageExtToMimeType,
    );

    if (!result.ok) {
      throw new errors.FileTypeNotAllowed(result.ext);
    }

    const { ext, mimeType } = result;

    return this.uploadFile(
      ext,
      mimeType,
      image.filename,
      image.createReadStream(),
    );
  }

  @Mutation(returns => UploadedVideo, {
    description: 'Ready an video for processing',
  })
  async uploadVideo(@Arg('video', type => GraphQLUpload) video: FileUpload) {
    const result = await this.fileUploadService.getExtMimeType(
      video.createReadStream(),
      videoExtToMimeType,
    );

    if (!result.ok) {
      throw new errors.FileTypeNotAllowed(result.ext);
    }

    const { ext, mimeType } = result;

    return this.uploadFile(
      ext,
      mimeType,
      video.filename,
      video.createReadStream(),
    );
  }
}
