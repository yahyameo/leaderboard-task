import {Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  constructor(
  ) {
  }
  getHealth(): string {
    return 'Yes,Application is working fine!';
  }

}
