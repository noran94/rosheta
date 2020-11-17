import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyRequestsPageRoutingModule } from './my-requests-routing.module';

import { MyRequestsPage } from './my-requests.page';
import {HeaderPageModule} from '../header/header.module';
import {SearchPageModule} from '../search/search.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MyRequestsPageRoutingModule,
        HeaderPageModule,
        SearchPageModule
    ],
  declarations: [MyRequestsPage]
})
export class MyRequestsPageModule {}
