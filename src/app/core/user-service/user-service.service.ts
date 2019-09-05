import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userList = ['bob', 'alice', 'john'];
  private users = new BehaviorSubject<string[]>([]);

  constructor() {
    this.addUser();
  }

  get users$() {
    return this.users.asObservable().pipe(map((list) => list.join(' ** ')));
  }

  addUser() {
    const user = this.userList[
      Math.floor(Math.random() * (0 - this.userList.length)) + this.userList.length
    ];

    this.users.next([...this.users.getValue(), user]);
  }

  getName(name: string): string {
    return `Hello ${name}!`;
  }
}
