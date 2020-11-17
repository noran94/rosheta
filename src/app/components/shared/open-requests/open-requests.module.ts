import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenRequestsPageRoutingModule } from './open-requests-routing.module';

import { OpenRequestsPage } from './open-requests.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OpenRequestsPageRoutingModule
    ],
    exports: [
        OpenRequestsPage
    ],
    declarations: [OpenRequestsPage]
})
export class OpenRequestsPageModule {}
