import { ReadStream, createReadStream, createWriteStream, unlink } from 'fs';
import { join } from 'path';

import { Injectable, Logger } from '@nestjs/common';
import AWS from 'aws-sdk';
import FileType from 'file-type';
import { ulid } from 'ulid';

import { BucketName, BucketType } from '#lib/constants/AWS';

type Env = 'development' | 'production';

interface RetrievedFile {
  env: Env;
  filename: string;
  readStream: ReadStream;
}

interface UploadedFile {
  env: Env;
  filename: string;
  location: string;
}

interface GetFileOptions {
  bucket: BucketType;
  filename: string;
}

interface RemoveFileOptions {
  bucket: BucketType;
  filename: string;
}

interface UploadFileOptions {
  bucket: BucketType;
  ext: string;
  readStream: ReadStream;
}

@Injectable()
export class FileUploadService {
  private readonly logger = new Logger(FileUploadService.name);
  private readonly S3 = new AWS.S3();

  async getExtMimeType<M>(
    readStream: ReadStream,
    converter: (ext: string) => M | null,
  ) {
    const fileTypeResult = await FileType.fromStream(readStream);
    const ext = fileTypeResult?.ext;

    if (!ext) {
      return {
        ok: false,
        ext: undefined,
      } as const;
    }

    const mimeType = converter(ext);

    if (!mimeType) {
      return {
        ext,
        ok: false,
      } as const;
    }

    return { ok: true, ext, mimeType } as const;
  }

  getFile(options: GetFileOptions) {
    return new Promise<RetrievedFile>((res, rej) => {
      if (process.env.NODE_ENV === 'production') {
        const params = {
          Bucket:
            options.bucket === BucketType.Live
              ? BucketName.Live
              : BucketName.Staged,
          Key: options.filename,
        };

        const readStream = this.S3.getObject(params, err => {
          if (err) {
            rej(err);
          }
        }).createReadStream();

        res({
          readStream: readStream as ReadStream,
          env: 'production',
          filename: options.filename,
        });
      } else {
        const path = join(
          __dirname,
          '..',
          'server',
          'fakeS3',
          options.bucket,
          options.filename,
        );

        const readStream = createReadStream(path);
        res({
          readStream,
          env: 'development',
          filename: options.filename,
        });
      }
    });
  }

  removeFile(options: RemoveFileOptions) {
    return new Promise<void>((res, rej) => {
      if (process.env.NODE_ENV === 'production') {
        const params = {
          Bucket:
            options.bucket === BucketType.Live
              ? BucketName.Live
              : BucketName.Staged,
          Key: options.filename,
        };

        this.S3.deleteObject(params, err => {
          if (err) {
            rej(err);
          } else {
            res();
            this.logger.verbose(
              `Deleted file ${options.filename} from bucket '${params.Bucket}'`,
            );
          }
        });
      } else {
        const path = join(
          __dirname,
          '..',
          'server',
          'fakeS3',
          options.bucket,
          options.filename,
        );
        unlink(path, error => {
          if (error) {
            rej(error);
          } else {
            res();
            this.logger.verbose(
              `Deleted file ${options.filename} from bucket '${options.bucket}'`,
            );
          }
        });
      }
    });
  }

  uploadFile(options: UploadFileOptions) {
    const filename = `${ulid()}.${options.ext}`;

    return new Promise<UploadedFile>((res, rej) => {
      if (process.env.NODE_ENV === 'production') {
        const params = {
          ACL: 'public-read',
          Body: options.readStream,
          Bucket:
            options.bucket === BucketType.Live
              ? BucketName.Live
              : BucketName.Staged,
          Key: filename,
        };

        this.S3.upload(params, (err: Error, data: any) => {
          if (err) {
            rej(
              new Error(
                `Could not upload file in dev mode: ${filename}\n${err}`,
              ),
            );
          } else {
            res({
              filename,
              env: 'production',
              location: data.Location,
            });
            this.logger.verbose(
              `Uploaded file ${filename} to bucket '${params.Bucket}'`,
            );
          }
        });
      } else {
        const writeStream = createWriteStream(
          join(__dirname, '..', 'server', 'fakeS3', options.bucket, filename),
        );
        options.readStream.on('error', e => {
          rej(
            new Error(`Could not upload file in dev mode: ${filename}\n${e}`),
          );
        });
        writeStream.on('finish', () => {
          res({
            filename,
            env: 'development',
            location: `/fakeS3/${options.bucket}/${filename}`,
          });
          this.logger.verbose(
            `Uploaded file ${filename} to bucket '${options.bucket}'`,
          );
        });
        writeStream.on('error', e => {
          rej(
            new Error(`Could not upload file in dev mode: ${filename}\n${e}`),
          );
        });
        options.readStream.pipe(writeStream);
      }
    });
  }
}
