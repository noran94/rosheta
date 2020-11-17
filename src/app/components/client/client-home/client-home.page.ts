import {Component} from '@angular/core';
import {Shared} from '../../sharedComponent';
import {SharedService} from '../../../services/shared.service';
import {UserService} from '../../../services/user.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-client-home',
    templateUrl: './client-home.page.html',
    styleUrls: ['./client-home.page.scss'],
})
export class ClientHomePage extends Shared {
    url = 'request';
    user;

    constructor(public sharedService: SharedService,
                private userService: UserService) {
        super(sharedService);
    }

    customOnInit() {
        this.user = this.userService.getCurrentUser();
        this.initFilter = {
            pageSize: 4,
            createdBy: this.user.id,
            requestStatusIds: '1,2,4,5',
            sortBy: 'creationDate',
            sortDir: 'desc'
        };
        this.form = new FormGroup({
            createdBy: new FormControl(this.user.id),
            requestStatusIds: new FormControl('1,2,4,5'),
            sortBy: new FormControl('creationDate'),
            sortDir: new FormControl('desc')
        });
    }
}
