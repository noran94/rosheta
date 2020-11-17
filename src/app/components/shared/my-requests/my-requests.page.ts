import {Component} from '@angular/core';
import {Shared} from '../../sharedComponent';
import {SharedService} from '../../../services/shared.service';
import * as moment from 'moment';
import {UserService} from '../../../services/user.service';

@Component({
    selector: 'app-my-requests',
    templateUrl: './my-requests.page.html',
    styleUrls: ['./my-requests.page.scss'],
})
export class MyRequestsPage extends Shared {
    url = 'request';
    searchInputs = [{
        name: 'Date',
        key: 'creationDate',
        type: 'datetime'
    }, {
        name: 'Status',
        key: 'requestStatusId',
        type: 'select',
        options: [{id: 1, nameEn: 'Submitted'}, {id: 2, nameEn: 'Accepted'},
            {id: 3, nameEn: 'Canceled'}, {id: 4, nameEn: 'Rejected'},
            {id: 5, nameEn: 'On Delivery'}, {id: 6, nameEn: 'Delivered'}, {id: 7, nameEn: 'Closed'}]
    }];


    constructor(public sharedService: SharedService, public userService: UserService) {
        super(sharedService);
    }

    customOnInit() {
        if (this.userService.isClient()) {
            this.initFilter = {
                createdBy: this.userService.getCurrentUser().id,
                sortDir: 'desc',
                sortBy: 'creationDate'
            };
        } else {
            this.initFilter = {
                pharmacy: this.userService.getCurrentUser().id,
                sortDir: 'desc',
                sortBy: 'creationDate'
            };
        }
    }

    searchCustom() {
        if (this.form.value.creationDate) {
            this.form.value.creationDate = moment(this.form.value.creationDate).format('YYYY-MM-DDTHH:mm:ss.SSS') + 'Z';
        }
        this.searchItem();
    }
}
