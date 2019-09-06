import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './core/user-service/user-service.service';
import { Router } from '@angular/router';

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
  username;

  routes = ['/home', '/admin', '/service-example', '/todos'];

  constructor(public userService: UserService, private router: Router) {
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
    this.router.navigate(['/home']);
  }

  handleUsername(name) {
    this.username = name;
  }
}
