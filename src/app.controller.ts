import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('index')
export class AppController {
  constructor(
    private readonly appService: AppService

  ) { } // injeção de depedencia

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('teste')
  acao(): string {
    return 'olá Luis';
  }
}
