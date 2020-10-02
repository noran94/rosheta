import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {UserService} from './user.service';

@Injectable({
    providedIn: 'root'
})
export class TypeGaurdService implements CanActivate {

    constructor(private userService: UserService,
                private router: Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (!this.userService.getCurrentUser()) {
            return true;
        }
        if (this.userService.isClient()) {
            this.router.navigate(['/client']);
        }
        if (this.userService.isAdmin()) {
            this.router.navigate(['/admin']);
        }
        if (this.userService.isPharmacy()) {
            this.router.navigate(['/pharmacy']);
        }
    }
}
