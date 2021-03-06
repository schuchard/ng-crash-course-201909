import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { ConfigComponent } from './shared/config/config.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./+admin/admin.module').then((mod) => mod.AdminModule),
  },
  {
    path: 'home',
    component: ReactiveFormComponent,
  },
  {
    path: 'service-example',
    component: ServiceExampleComponent,
  },
  {
    path: 'todos',
    loadChildren: () => import('./todos-container/todos.module').then((mod) => mod.TodosModule),
  },
  {
    path: 'config',
    component: ConfigComponent,
    outlet: 'float'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
