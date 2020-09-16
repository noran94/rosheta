import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthlyReportsPageRoutingModule } from './monthly-reports-routing.module';

import { MonthlyReportsPage } from './monthly-reports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthlyReportsPageRoutingModule
  ],
  declarations: [MonthlyReportsPage]
})
export class MonthlyReportsPageModule {}
