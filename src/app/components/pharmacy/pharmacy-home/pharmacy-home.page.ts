import {Component, OnDestroy} from '@angular/core';
import {SharedService} from '../../../services/shared.service';
import {UserService} from '../../../services/user.service';
import {Shared} from '../../sharedComponent';
import {FormControl, FormGroup} from '@angular/forms';
import * as moment from 'moment';
import {MessagingService} from '../../../services/messaging.service';

@Component({
    selector: 'app-pharmacy-home',
    templateUrl: './pharmacy-home.page.html',
    styleUrls: ['./pharmacy-home.page.scss'],
})
export class PharmacyHomePage extends Shared implements OnDestroy {
    url = 'request';
    user;
    openForRequests;
    notificationSubscription;

    constructor(public sharedService: SharedService,
                private userService: UserService,
                private messagingService: MessagingService) {
        super(sharedService);
    }

    customOnInit() {
        if (!this.notificationSubscription) {
            this.notificationSubscription = this.messagingService.newRequestNotification.subscribe(() => {
                this.ionViewWillEnter();
            });
        }
        this.user = this.userService.getCurrentUser();
        this.openForRequests = !this.user.pharmacy.disableRequests;
        const date = new Date();
        date.setHours(date.getHours() - 300);
        this.initFilter = {
            pageSize: 4,
            governorateId: this.user.addresses[0].governorateId,
            districtId: this.user.addresses[0].districtId,
            creationDate: moment(date).format('YYYY-MM-DDTHH:mm:ss.SSS') + 'Z',
            creationDateTo: moment().format('YYYY-MM-DDTHH:mm:ss.SSS') + 'Z',
            requestStatusIds: '1',
            sortBy: 'creationDate',
            sortDir: 'desc'
        };
    }

    changePharmacyStatus() {
        if (this.openForRequests !== this.user.pharmacy.disableRequests) {
            return;
        }
        this.userService.updatePharmacyStatus(!this.openForRequests).subscribe(() => {
            this.user.pharmacy.disableRequests = !this.openForRequests;
            this.userService.updateUserStorage(this.user);
            this.sharedService.successToast();
        }, (error) => {
            this.openForRequests = !this.openForRequests;
            this.sharedService.errorToast(error.error.message);
        });
    }

    ngOnDestroy(): void {
        this.notificationSubscription.unsubscribe();
    }
}
