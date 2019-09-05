import { NgModule } from '@angular/core';
import { AlertDirective } from './alert/alert.directive';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';

const comp = [AlertDirective, UserComponent];

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [comp],
  exports: [comp],
  providers: [],
})
export class SharedModule {}
