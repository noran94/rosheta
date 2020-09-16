import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientsPageRoutingModule } from './clients-routing.module';

import { ClientsPage } from './clients.page';
import { HeaderPageModule } from '../../shared/header/header.module';
import { SearchPageModule } from '../../shared/search/search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientsPageRoutingModule,
    HeaderPageModule,
    SearchPageModule
  ],
  declarations: [ClientsPage]
})
export class ClientsPageModule { }
