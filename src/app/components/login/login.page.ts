import {Component, OnInit} from '@angular/core';
import {LoginService} from 'src/app/services/login.service';
import {Storage} from '@ionic/storage';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {SharedService} from '../../services/shared.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(private loginService: LoginService,
                private storage: Storage,
                private router: Router,
                private userService: UserService,
                private sharedService: SharedService) {
    }

    ngOnInit() {
    }

    login(form) {
        this.loginService.login(form.value).subscribe((data) => {
            this.storage.set('token', data.body['token']);
            this.storage.set('user', data.body);
            this.userService.setUser(data.body);
            this.sharedService.successToast('Logged in Sucessfully');
            this.navigate();
        }, (error) => {
            this.sharedService.errorToast(error.error.message);
        });
    }

    private navigate() {
        if (this.userService.isAdmin()) {
            this.router.navigate(['admin']);
        } else if (this.userService.isClient()) {
            this.router.navigate(['client']);
        } else if (this.userService.isPharmacy()) {
            this.router.navigate(['pharmacy']);
        }
    }
}
