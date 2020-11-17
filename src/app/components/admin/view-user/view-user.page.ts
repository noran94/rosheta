import {Component} from '@angular/core';
import {Shared} from '../../sharedComponent';
import {SharedService} from '../../../services/shared.service';
import {LookupsService} from '../../../services/lookups.service';
import {UserService} from '../../../services/user.service';
import {RequestService} from '../../../services/request.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-view-user',
    templateUrl: './view-user.page.html',
    styleUrls: ['./view-user.page.scss'],
})
export class ViewUserPage extends Shared {
    url = 'user';
    isList = false;

    constructor(public sharedService: SharedService,
                private lookupsService: LookupsService,
                public userService: UserService,
                private requestService: RequestService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
        super(sharedService);
    }

    customOnInit() {
        this.id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.getItem(this.fillForm.bind(this));
    }

    fillForm() {

    }
}
