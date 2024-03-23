import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { JwtService } from '@nestjs/jwt';

export interface User {
  userId: number | string;
  username: string;
  password?: string;
}

@Injectable()
export class AuthService {
  testUser: User;

  constructor(private jwtService: JwtService) {
    this.testUser = {
      userId: randomUUID(),
      username: 'adair',
      password: '123',
    };
  }

  validateUser(username: string, password: string): User {
    console.log('service');
    if (
      this.testUser.username === username &&
      this.testUser.password === password
    ) {
      return { userId: this.testUser.userId, username: this.testUser.username };
    } else {
      return null;
    }
  }

  login(user: User) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
