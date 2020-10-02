import {Component} from '@angular/core';
import {Shared} from '../../sharedComponent';
import {SharedService} from '../../../services/shared.service';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../../services/user.service';

@Component({
    selector: 'app-pharmacy-home',
    templateUrl: './pharmacy-home.page.html',
    styleUrls: ['./pharmacy-home.page.scss'],
})
export class PharmacyHomePage extends Shared {
    url = 'request';
    user;
    constructor(public sharedService: SharedService,
                private userService: UserService) {
        super(sharedService);
    }

    customOnInit() {
        const date = new Date();
        date.setHours(date.getHours() - 1);
        this.user = this.userService.getCurrentUser();
        this.form = new FormGroup({
            governorateId: new FormControl(this.user.addresses[0].governorateId),
            districtId: new FormControl(this.user.addresses[0].districtId),
            creationDate: new FormControl(date.toISOString()),
            creationDateTo: new FormControl(new Date().toISOString()),
            recipient: new FormControl(0)
        });
    }

}
