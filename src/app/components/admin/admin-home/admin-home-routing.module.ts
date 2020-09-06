import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminHomePage } from './admin-home.page';

const routes: Routes = [
  {
    path: '',
    component: AdminHomePage
  },
  {
    path: 'categories',
    loadChildren: () => import('../category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('../products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'accessories',
    loadChildren: () => import('../accessories/accessories.module').then( m => m.AccessoriesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminHomePageRoutingModule {}
