import {Component, OnInit} from '@angular/core';
import {LoginService} from 'src/app/services/login.service';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(private loginService: LoginService,
                private storage: Storage) {
    }

    ngOnInit() {
    }

    login(form) {
        this.loginService.login(form.value).subscribe((data) => {
            this.storage.set('token', data.body['token']);
            this.storage.set('user', data.body);
        });
    }

}
