import {
  Body, Controller, FileTypeValidator, Get, MaxFileSizeValidator, Param, ParseFilePipe, Post, UploadedFile, UploadedFiles, UseGuards, UseInterceptors, Delete, ParseIntPipe,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) { }


  @Get("health")
  getHealth(): string {
    return this.appService.getHealth();
  }

}
