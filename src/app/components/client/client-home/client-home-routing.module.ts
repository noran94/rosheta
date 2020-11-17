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
    path: 'order-details/:id',
    loadChildren: () => import('../../shared/order-details/order-details.module').then( m => m.OrderDetailsPageModule)
  },
  {
    path: 'requests-history',
    loadChildren: () => import('../../shared/my-requests/my-requests.module').then( m => m.MyRequestsPageModule)
  },
  {
    path: 'accessory-details/:id',
    loadChildren: () => import('../accessory-details/accessory-details.module').then( m => m.AccessoryDetailsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('../cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'checkout/:price',
    loadChildren: () => import('../checkout/checkout.module').then( m => m.CheckoutPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientHomePageRoutingModule {}
