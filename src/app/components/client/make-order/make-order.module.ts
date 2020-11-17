import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeOrderPageRoutingModule } from './make-order-routing.module';

import {HeaderPageModule} from '../../shared/header/header.module';
import {IonicSelectableModule} from 'ionic-selectable';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MakeOrderPageRoutingModule,
        HeaderPageModule,
        IonicSelectableModule
    ],
  declarations: []
})
export class MakeOrderPageModule {}
