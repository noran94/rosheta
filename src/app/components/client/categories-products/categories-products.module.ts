import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesProductsPageRoutingModule } from './categories-products-routing.module';

import { CategoriesProductsPage } from './categories-products.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CategoriesProductsPageRoutingModule
    ],
    exports: [
        CategoriesProductsPage
    ],
    declarations: [CategoriesProductsPage]
})
export class CategoriesProductsPageModule {}
