import {Component, Input, OnInit} from '@angular/core';
import {Shared} from '../../sharedComponent';
import {SharedService} from '../../../services/shared.service';
import {FormControl, FormGroup} from '@angular/forms';
import * as moment from 'moment';

@Component({
    selector: 'app-open-requests',
    templateUrl: './open-requests.page.html',
    styleUrls: ['./open-requests.page.scss'],
})
export class OpenRequestsPage {
    @Input() that;

    constructor(public sharedService: SharedService) {
    }

}
