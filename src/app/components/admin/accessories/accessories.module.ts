import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessoriesPageRoutingModule } from './accessories-routing.module';

import { AccessoriesPage } from './accessories.page';
import {SearchPageModule} from '../../shared/search/search.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AccessoriesPageRoutingModule,
        SearchPageModule
    ],
  declarations: [AccessoriesPage]
})
export class AccessoriesPageModule {}
