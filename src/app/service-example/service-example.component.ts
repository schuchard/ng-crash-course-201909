import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../core/user-service/user-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.scss'],
})
export class ServiceExampleComponent implements OnInit {
  userForm = this.fb.group({
    user: [''],
  });

  @Output() username = new EventEmitter<string>();

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.userForm.valueChanges.subscribe(({ user }) => {
      console.log(this.userService.getName(user));
      this.username.emit(user ? this.userService.getName(user) : '');
    });
  }
}
