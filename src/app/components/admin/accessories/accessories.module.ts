import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessoriesPageRoutingModule } from './accessories-routing.module';

import { AccessoriesPage } from './accessories.page';
import { HeaderPageModule } from '../../shared/header/header.module';
import { SearchPageModule } from '../../shared/search/search.module';
import {NgxIonicImageViewerModule} from 'ngx-ionic-image-viewer';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AccessoriesPageRoutingModule,
        HeaderPageModule,
        SearchPageModule,
        NgxIonicImageViewerModule
    ],
  declarations: [AccessoriesPage]
})
export class AccessoriesPageModule { }
