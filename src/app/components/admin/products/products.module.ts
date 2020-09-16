import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import {SearchPageModule} from '../../shared/search/search.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProductsPageRoutingModule,
        SearchPageModule
    ],
  declarations: [ProductsPage]
})
export class ProductsPageModule {}
