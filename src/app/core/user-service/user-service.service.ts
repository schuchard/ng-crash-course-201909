import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userList = ['Bob', 'Alice', 'John'];
  private users = new BehaviorSubject([]);
  constructor() {}

  getName(name: string): string {
    return `Hello ${name}!`;
  }

  get users$() {
    return this.users.asObservable().pipe(map((users) => users.join(', ')));
  }

  addUsers() {
    const user = this.userList[
      Math.floor(Math.random() * (0 - this.userList.length)) + this.userList.length
    ];
    this.users.next([...this.users.getValue(), user]);
  }
}
