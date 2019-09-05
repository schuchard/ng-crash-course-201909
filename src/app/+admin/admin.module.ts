import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSummaryComponent } from './admin-summary/admin-summary.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AdminSummaryComponent],
  exports: [AdminSummaryComponent],
  imports: [
    CommonModule, SharedModule
  ]
})
export class AdminModule { }
