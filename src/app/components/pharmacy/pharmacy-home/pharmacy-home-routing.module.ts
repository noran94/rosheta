import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PharmacyHomePage } from './pharmacy-home.page';

const routes: Routes = [
  {
    path: '',
    component: PharmacyHomePage
  },
  {
    path: 'order-details',
    loadChildren: () => import('../../shared/order-details/order-details.module').then( m => m.OrderDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmacyHomePageRoutingModule {}
