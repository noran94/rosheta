import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGaurdService } from './services/admin-gaurd.service';
import {ClientGaurdService} from './services/client-gaurd.service';
import {PharmacyGaurdService} from './services/pharmacy-gaurd.service';
import {TypeGaurdService} from './services/type-gaurd.service';
import {AuthGaurdService} from './services/auth-gaurd.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login', canActivate: [TypeGaurdService],
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register/:id',
    loadChildren: () => import('./components/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'pharmacy', canActivate: [PharmacyGaurdService],
    loadChildren: () => import('./components/pharmacy/pharmacy-home/pharmacy-home.module').then( m => m.PharmacyHomePageModule)
  },
  {
    path: 'client', canActivate: [ClientGaurdService],
    loadChildren: () => import('./components/client/client-home/client-home.module').then( m => m.ClientHomePageModule)
  },
  {
    path: 'admin', canActivate: [AdminGaurdService],
    loadChildren: () => import('./components/admin/admin-home/admin-home.module').then( m => m.AdminHomePageModule)
  },
  {
    path: 'chat/:id', canActivate: [AuthGaurdService],
    loadChildren: () => import('./components/shared/chat/chat.module').then( m => m.ChatPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
