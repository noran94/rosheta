import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesProductsPage } from './categories-products.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriesProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesProductsPageRoutingModule {}
