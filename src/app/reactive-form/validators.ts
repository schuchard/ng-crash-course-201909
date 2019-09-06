import { FormControl, AsyncValidatorFn, AbstractControl } from '@angular/forms';

import { timer, of, Observable } from 'rxjs';

import { map, take, debounceTime, switchMap, first } from 'rxjs/operators';
import { RestService } from '../core/rest-service/rest-service.service';
export class CustomValidators {
  constructor(private rest: RestService) {}

  static lengthAsyncValidator(length = 2, time: number = 500): AsyncValidatorFn {
    return (input: FormControl) => {
      return timer(time).pipe(
        map(() => (input.value.length > length ? null : { lengthErr: true })),
        take(1)
      );
    };
  }
}

export const httpAsyncValidator = (obs$: Observable<any>): AsyncValidatorFn => {
  return (control: AbstractControl) => {
    if (!control.valueChanges) {
      return of(null);
    } else {
      return control.valueChanges.pipe(
        debounceTime(300),
        switchMap(() => obs$), // returns true if invalid
        map((res) => (res && control.value.length < 3 ? { error: true } : null)),
        first()
      );
    }
  };
};
