import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderDetailsPageRoutingModule } from './order-details-routing.module';

import { OrderDetailsPage } from './order-details.page';
import {HeaderPageModule} from '../header/header.module';
import {NgWizardModule, THEME} from 'ng-wizard';
import {NgxIonicImageViewerModule} from 'ngx-ionic-image-viewer';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OrderDetailsPageRoutingModule,
        HeaderPageModule,
        NgWizardModule.forRoot({
            theme: THEME.circles
        }),
        NgxIonicImageViewerModule
    ],
  declarations: [OrderDetailsPage]
})
export class OrderDetailsPageModule {}
