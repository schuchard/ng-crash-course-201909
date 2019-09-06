import { FormControl, AsyncValidatorFn } from '@angular/forms';

import { timer } from 'rxjs';

import { map, take } from 'rxjs/operators';

export const lengthAsyncValidator = (length = 2, time: number = 500): AsyncValidatorFn => {
  return (input: FormControl) => {
    return timer(time).pipe(
      map(() => (input.value.length > length ? null : { lengthErr: true })),
      take(1)
    );
  };
};
