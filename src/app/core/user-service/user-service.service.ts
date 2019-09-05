import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getName(name: string): string {
    return `Hello ${name}!`;
  }
}
