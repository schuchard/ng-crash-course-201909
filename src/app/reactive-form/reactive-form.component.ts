import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { CustomValidators, httpAsyncValidator } from './validators';
import { combineLatest } from 'rxjs';
import { RestService } from '../core/rest-service/rest-service.service';
import { ITodos } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  errorMessage;
  loginForm = this.fb.group({
    username: ['', Validators.required, [CustomValidators.lengthAsyncValidator(2)]],
    password: [
      '',
      Validators.required,
      [
        httpAsyncValidator(
          this.restService
            .get<ITodos>('https://jsonplaceholder.typicode.com/todos/2')
            .pipe(map((res) => res && !res.completed)) // return true for errors, not completed is an error;
        ),
      ],
    ],
  });

  constructor(private fb: FormBuilder, private restService: RestService) {}

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
