import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessoryDetailsPage } from './accessory-details.page';

const routes: Routes = [
  {
    path: '',
    component: AccessoryDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessoryDetailsPageRoutingModule {}
