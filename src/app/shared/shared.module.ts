import { NgModule } from '@angular/core';
import { AlertDirective } from './alert/alert.directive';
import { UserComponent } from './user/user.component';

const comp = [AlertDirective, UserComponent];

@NgModule({
  imports: [],
  declarations: [comp],
  exports: [comp],
  providers: [],
})
export class SharedModule {}
