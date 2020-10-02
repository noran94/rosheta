import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeOrderPage } from './make-order.page';

const routes: Routes = [
  {
    path: '',
    component: MakeOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeOrderPageRoutingModule {}
