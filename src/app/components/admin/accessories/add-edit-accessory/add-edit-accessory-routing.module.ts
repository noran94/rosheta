import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditAccessoryPage } from './add-edit-accessory.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditAccessoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditAccessoryPageRoutingModule {}
