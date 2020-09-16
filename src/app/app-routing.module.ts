import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGaurdService } from './services/admin-gaurd.service';
import {ClientGaurdService} from './services/client-gaurd.service';
import {PharmacyGaurdService} from './services/pharmacy-gaurd.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register/:id',
    loadChildren: () => import('./components/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then( m => m.HomePageModule)
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
  },  {
    path: 'search',
    loadChildren: () => import('./components/shared/search/search.module').then( m => m.SearchPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
