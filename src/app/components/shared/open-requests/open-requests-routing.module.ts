import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenRequestsPage } from './open-requests.page';

const routes: Routes = [
  {
    path: '',
    component: OpenRequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenRequestsPageRoutingModule {}
