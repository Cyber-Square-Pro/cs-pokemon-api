import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  homeRoute(): string {
    return `
    <div style="height:300px;margin-top:300px">
    <h1 align="center">Hello From CS Pro Pokemon App</h1>
    </div>
    `;
  }
}
