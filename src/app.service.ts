import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  homeRoute(): string {
    return `
    <center>
    <h1 align="center">Hello From CS Pro Pokemon...</h1>
    </center>
    `;
  }
}
