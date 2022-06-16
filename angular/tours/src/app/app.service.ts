import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHelloTours(): string {
    return 'Hello from "tours" app!';
  }
}
