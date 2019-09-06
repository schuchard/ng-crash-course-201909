import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodosContainerComponent } from './todos-container.component';
import { TodoSummaryComponent } from './todo-summary/todo-summary.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TodosContainerComponent,
    children: [
      {
        path: '',
        component: TodoSummaryComponent,
      },
      {
        path: ':id',
        component: TodoDetailComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [TodosContainerComponent, TodoSummaryComponent, TodoDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TodosModule {}
