import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSummaryComponent } from './admin-summary/admin-summary.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminSummaryComponent,
  }
];

@NgModule({
  declarations: [AdminSummaryComponent],
  exports: [AdminSummaryComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
