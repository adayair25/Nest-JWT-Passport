import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      message: 'Hello World!',
      description: 'This is a simple API built with NestJS.',
      author: 'adayair',
      github: 'https://github.com/adayair25',
      linkedin: 'https://www.linkedin.com/in/adair-sanchez-developer/',
    };
  }
}
