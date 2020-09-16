import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PharmaciesPage } from './pharmacies.page';

const routes: Routes = [
  {
    path: '',
    component: PharmaciesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmaciesPageRoutingModule {}
