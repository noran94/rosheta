import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewUserPageRoutingModule } from './view-user-routing.module';

import { ViewUserPage } from './view-user.page';
import {HeaderPageModule} from '../../shared/header/header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ViewUserPageRoutingModule,
        HeaderPageModule
    ],
  declarations: [ViewUserPage]
})
export class ViewUserPageModule {}
