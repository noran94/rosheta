import {Component, OnInit} from '@angular/core';
import {LoginService} from 'src/app/services/login.service';
import {Storage} from '@ionic/storage';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(private loginService: LoginService,
                private storage: Storage,
                private router: Router,
                private userService: UserService) {
    }

    ngOnInit() {
    }

    login(form) {
        this.loginService.login(form.value).subscribe((data) => {
            this.storage.set('token', data.body['token']);
            this.storage.set('user', data.body);
            this.userService.setUser(data.body);
            this.router.navigate(['home']);
        });
    }

}
