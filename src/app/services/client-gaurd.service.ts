import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ClientGaurdService implements CanActivate {
 
  constructor(private userService: UserService,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (!this.userService.getCurrentUser()) {
      this.router.navigate['login'];
      return false;
    }
    return this.userService.isClient();
  }
}
