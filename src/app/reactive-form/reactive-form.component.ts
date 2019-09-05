import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { combineLatest, map } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  errorMessage;
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

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
