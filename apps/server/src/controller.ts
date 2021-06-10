import { Controller } from '@nestjs/common';

import { AppService } from './service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
