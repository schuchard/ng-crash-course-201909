import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { combineLatest, map } from 'rxjs/operators';
import { UserService } from '../core/user-service/user-service.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  errorMessage;
  users$ = this.userService.users$;
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.errorMessage = this.username.valueChanges
      .pipe(combineLatest(this.password.valueChanges))
      .pipe(
        map(([username, password]) => {
          return username === password ? 'username cant match password' : '';
        })
      );
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
