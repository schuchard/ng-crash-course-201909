import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { SharedModule } from './shared/shared.module';
import { MyNameFormComponent } from './my-name-form/my-name-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ServiceExampleComponent } from './service-example/service-example.component';

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
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CustomerComponent,
    MyNameFormComponent,
    ReactiveFormComponent,
    ServiceExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
