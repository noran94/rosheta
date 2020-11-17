import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessoriesPage } from './accessories.page';
import {AddEditAccessoryPage} from './add-edit-accessory/add-edit-accessory.page';

const routes: Routes = [
  {
    path: '',
    component: AccessoriesPage
  },
  {
    path: ':id',
    component: AddEditAccessoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessoriesPageRoutingModule {}
