import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PharmacyHomePageRoutingModule } from './pharmacy-home-routing.module';

import { PharmacyHomePage } from './pharmacy-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PharmacyHomePageRoutingModule
  ],
  declarations: [PharmacyHomePage]
})
export class PharmacyHomePageModule {}
