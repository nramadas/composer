import { Module } from '@nestjs/common';

import { FileUploadMutation } from './mutation';
import { FileUploadService } from './service';

@Module({
  imports: [],
  providers: [FileUploadMutation, FileUploadService],
  exports: [],
})
export class FileUploadModule {}
