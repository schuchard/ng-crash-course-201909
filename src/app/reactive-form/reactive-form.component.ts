import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { CustomValidators } from './validators';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  errorMessage;
  loginForm = this.fb.group({
    username: ['', Validators.required, [CustomValidators.lengthAsyncValidator(2)]],
    password: ['', Validators.required, [CustomValidators.lengthAsyncValidator(3)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.errorMessage = combineLatest(this.username.valueChanges, this.password.valueChanges).pipe(
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
