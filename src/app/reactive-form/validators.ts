import { FormControl, AsyncValidatorFn, AbstractControl } from '@angular/forms';

import { timer } from 'rxjs';

import { map, take, debounceTime, switchMap } from 'rxjs/operators';
import { RestService } from '../core/rest-service/rest-service.service';
export class CustomValidators {

  constructor(private rest: RestService) { }

  static lengthAsyncValidator(length = 2, time: number = 500): AsyncValidatorFn {
    return (input: FormControl) => {
      return timer(time).pipe(
        map(() => (input.value.length > length ? null : { lengthErr: true })),
        take(1)
      );
    };
  }
}
