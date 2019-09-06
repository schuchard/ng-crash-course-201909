import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { TodosContainerComponent } from './todos-container/todos-container.component';
import { TodoSummaryComponent } from './todos-container/todo-summary/todo-summary.component';
import { TodoDetailComponent } from './todos-container/todo-detail/todo-detail.component';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./+admin/admin.module').then((mod) => mod.AdminModule),
  },
  {
    path: 'home',
    component: ReactiveFormComponent
  },
  {
    path: 'service-example',
    component: ServiceExampleComponent
  },
  {
    path: 'todos',
    component: TodosContainerComponent,
    children: [
      {
        path: '',
        component: TodoSummaryComponent
      },
      {
        path: ':id',
        component: TodoDetailComponent
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
