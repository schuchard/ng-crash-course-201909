import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './core/user-service/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  countState = 0;
  title = 'blastoff';
  dashboardCustomer = 'Angular';
  counter = new BehaviorSubject(0);
  customerName = { name: 'no name' };
  myNameFormValue = '';

  constructor(public userService: UserService) {
    // this.counter.unsubscribe()
  }

  addCount() {
    this.countState++;
    this.counter.next(this.countState);
  }

  handleAlert(event) {
    this.customerName = event;
    console.log(event);
  }

  handleSubmitName(value) {
    this.myNameFormValue = value;
  }
}
