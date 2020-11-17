import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestsPageRoutingModule } from './requests-routing.module';

import { RequestsPage } from './requests.page';
import { HeaderPageModule } from '../../shared/header/header.module';
import {SearchPageModule} from '../../shared/search/search.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RequestsPageRoutingModule,
        HeaderPageModule,
        SearchPageModule
    ],
  declarations: [RequestsPage]
})
export class RequestsPageModule {}
