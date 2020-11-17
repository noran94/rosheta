import {Component} from '@angular/core';
import {Shared} from '../../sharedComponent';
import {SharedService} from '../../../services/shared.service';

@Component({
    selector: 'app-requests',
    templateUrl: './requests.page.html',
    styleUrls: ['./requests.page.scss'],
})
export class RequestsPage extends Shared {
    url = 'request';
    searchInputs = [{
        name: 'Pharmacy',
        key: 'pharmacyName',
        type: 'text'
    }, {
        name: 'Status',
        key: 'requestStatusId',
        type: 'select',
        options: [{id: 1, nameEn: 'Submitted'}, {id: 2, nameEn: 'Accepted'},
            {id: 3, nameEn: 'Canceled'}, {id: 4, nameEn: 'Rejected'},
            {id: 5, nameEn: 'On Delivery'}, {id: 6, nameEn: 'Delivered'}, {id: 7, nameEn: 'Closed'}]
    }];

    initFilter = {
        sortDir: 'desc',
        sortBy: 'creationDate'
    };

    constructor(public sharedService: SharedService) {
        super(sharedService);
    }

}
