import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AdminHomePage} from './admin-home.page';

const routes: Routes = [
    {
        path: '',
        component: AdminHomePage
    },
    {
        path: 'categories',
        loadChildren: () => import('../category/category.module').then(m => m.CategoryPageModule)
    },
    {
        path: 'products',
        loadChildren: () => import('../products/products.module').then(m => m.ProductsPageModule)
    },
    {
        path: 'accessories',
        loadChildren: () => import('../accessories/accessories.module').then(m => m.AccessoriesPageModule)
    },
    {
        path: 'pharmacies',
        loadChildren: () => import('../pharmacies/pharmacies.module').then(m => m.PharmaciesPageModule)
    },
    {
        path: 'clients',
        loadChildren: () => import('../clients/clients.module').then(m => m.ClientsPageModule)
    },
    {
        path: 'requests',
        loadChildren: () => import('../requests/requests.module').then(m => m.RequestsPageModule)
    },
    {
        path: 'monthly-report',
        loadChildren: () => import('../../shared/monthly-reports/monthly-reports.module').then(m => m.MonthlyReportsPageModule)
    },
    {
        path: 'order-details/:id',
        loadChildren: () => import('../../shared/order-details/order-details.module').then( m => m.OrderDetailsPageModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminHomePageRoutingModule {
}
