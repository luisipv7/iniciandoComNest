import { Injectable } from '@nestjs/common'; // injeção de depedencia

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
