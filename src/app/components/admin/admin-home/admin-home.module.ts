import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminHomePageRoutingModule } from './admin-home-routing.module';

import { AdminHomePage } from './admin-home.page';
import { HeaderPageModule } from '../../shared/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminHomePageRoutingModule,
    HeaderPageModule
  ],
  declarations: [AdminHomePage]
})
export class AdminHomePageModule {}
