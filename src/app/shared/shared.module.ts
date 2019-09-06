import { NgModule } from '@angular/core';
import { AlertDirective } from './alert/alert.directive';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosComponent } from './todos/todos.component';
import { CommonModule } from '@angular/common';

const comp = [AlertDirective, UserComponent, TodosComponent];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [comp],
  exports: [comp],
  providers: [],
})
export class SharedModule {}
