import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessoryDetailsPageRoutingModule } from './accessory-details-routing.module';

import { AccessoryDetailsPage } from './accessory-details.page';
import {HeaderPageModule} from '../../shared/header/header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AccessoryDetailsPageRoutingModule,
        HeaderPageModule
    ],
  declarations: [AccessoryDetailsPage]
})
export class AccessoryDetailsPageModule {}
