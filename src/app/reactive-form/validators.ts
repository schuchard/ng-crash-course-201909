import { FormControl, AsyncValidatorFn } from '@angular/forms';

import { timer } from 'rxjs';

import { map } from 'rxjs/operators';

export const lengthAsyncValidator = (length = 2, time: number = 500): AsyncValidatorFn => {
  return (input: FormControl) => {
    return timer(time).pipe(map(() => (input.value.length > length ? null : { lengthErr: true })));
  };
};
