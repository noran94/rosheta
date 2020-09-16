import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthlyReportsPage } from './monthly-reports.page';

const routes: Routes = [
  {
    path: '',
    component: MonthlyReportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthlyReportsPageRoutingModule {}
