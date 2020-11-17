import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditAccessoryPageRoutingModule } from './add-edit-accessory-routing.module';

import {SharedModule} from '../../../shared/shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AddEditAccessoryPageRoutingModule,
        SharedModule
    ],
    exports: [
    ],
    declarations: []
})
export class AddEditAccessoryPageModule {}
