import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PharmaciesPageRoutingModule } from './pharmacies-routing.module';

import { PharmaciesPage } from './pharmacies.page';
import {SearchPageModule} from '../../shared/search/search.module';
import { HeaderPageModule } from '../../shared/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PharmaciesPageRoutingModule,
    SearchPageModule,
    HeaderPageModule
  ],
  declarations: [PharmaciesPage]
})
export class PharmaciesPageModule {}
