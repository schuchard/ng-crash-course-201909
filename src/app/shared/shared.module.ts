import { NgModule } from '@angular/core';
import { AlertDirective } from './alert/alert.directive';

const comp = [AlertDirective];

@NgModule({
  imports: [],
  exports: [comp],
  declarations: [comp],
  providers: [],
})
export class SharedModule { }

