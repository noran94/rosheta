import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PharmacyHomePageRoutingModule } from './pharmacy-home-routing.module';

import { PharmacyHomePage } from './pharmacy-home.page';
import { HeaderPageModule } from '../../shared/header/header.module';
import {OpenRequestsPageModule} from '../../shared/open-requests/open-requests.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PharmacyHomePageRoutingModule,
        HeaderPageModule,
        OpenRequestsPageModule

    ],
  declarations: [PharmacyHomePage]
})
export class PharmacyHomePageModule {}
