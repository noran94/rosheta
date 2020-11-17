import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutPageRoutingModule } from './checkout-routing.module';

import { CheckoutPage } from './checkout.page';
import {HeaderPageModule} from '../../shared/header/header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CheckoutPageRoutingModule,
        HeaderPageModule
    ],
  declarations: [CheckoutPage]
})
export class CheckoutPageModule {}
