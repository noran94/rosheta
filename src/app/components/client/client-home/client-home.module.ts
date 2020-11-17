import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientHomePageRoutingModule } from './client-home-routing.module';

import { ClientHomePage } from './client-home.page';
import { HeaderPageModule } from '../../shared/header/header.module';
import {OpenRequestsPageModule} from '../../shared/open-requests/open-requests.module';
import {CategoriesProductsPageModule} from '../categories-products/categories-products.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ClientHomePageRoutingModule,
        HeaderPageModule,
        OpenRequestsPageModule,
        CategoriesProductsPageModule
    ],
  declarations: [ClientHomePage]
})
export class ClientHomePageModule {}
