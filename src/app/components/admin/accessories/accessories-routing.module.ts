import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessoriesPage } from './accessories.page';

const routes: Routes = [
  {
    path: '',
    component: AccessoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessoriesPageRoutingModule {}
