import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientHomePage } from './client-home.page';

const routes: Routes = [
  {
    path: '',
    component: ClientHomePage
  },
  {
    path: 'make-order',
    loadChildren: () => import('../make-order/make-order.module').then( m => m.MakeOrderPageModule)
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
export class ClientHomePageRoutingModule {}
