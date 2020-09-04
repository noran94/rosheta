import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PharmacyHomePage } from './pharmacy-home.page';

const routes: Routes = [
  {
    path: '',
    component: PharmacyHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmacyHomePageRoutingModule {}
