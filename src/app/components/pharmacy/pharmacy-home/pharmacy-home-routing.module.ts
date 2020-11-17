import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PharmacyHomePage } from './pharmacy-home.page';

const routes: Routes = [
  {
    path: '',
    component: PharmacyHomePage
  },
  {
    path: 'order-details/:id',
    loadChildren: () => import('../../shared/order-details/order-details.module').then( m => m.OrderDetailsPageModule)
  },
  {
    path: 'requests-history',
    loadChildren: () => import('../../shared/my-requests/my-requests.module').then( m => m.MyRequestsPageModule)
  },
  {
    path: 'monthly-report',
    loadChildren: () => import('../../shared/monthly-reports/monthly-reports.module').then(m => m.MonthlyReportsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmacyHomePageRoutingModule {}
