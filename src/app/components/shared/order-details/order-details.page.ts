import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {Shared} from '../../sharedComponent';
import {SharedService} from '../../../services/shared.service';
import {LookupsService} from '../../../services/lookups.service';
import {UserService} from '../../../services/user.service';
import {ModalController} from '@ionic/angular';
import {RequestService} from '../../../services/request.service';
import {ActivatedRoute, Router} from '@angular/router';
import {THEME} from 'ng-wizard';
import * as moment from 'moment';
import * as _ from 'lodash';
import {MessagingService} from '../../../services/messaging.service';
import {UploadImageService} from '../../../services/upload-image.service';

@Component({
    selector: 'app-order-details',
    templateUrl: './order-details.page.html',
    styleUrls: ['./order-details.page.scss'],
    providers: [UploadImageService]
})
export class OrderDetailsPage extends Shared implements OnDestroy {
    url = 'order';
    isList = false;
    actions: any;
    config = {
        theme: THEME.circles,
        anchorSettings: {anchorClickable: false}
    };
    ready = false;
    notificationSubscription;
    refresh = 0;
    price: any;

    constructor(public sharedService: SharedService,
                private lookupsService: LookupsService,
                public userService: UserService,
                private modalController: ModalController,
                private requestService: RequestService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private messagingService: MessagingService,
                private changeRef: ChangeDetectorRef,
                public uploadImageService: UploadImageService) {
        super(sharedService);
    }

    customOnInit() {
        if (!this.notificationSubscription) {
            this.notificationSubscription = this.messagingService.statusNotification.subscribe(() => {
                this.ready = false;
                this.changeRef.detectChanges();
                this.ionViewWillEnter();
            });
        }
        this.ready = false;
        this.id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.getItem(this.prepareData.bind(this));
        this.requestService.getEligibleActions(this.id).subscribe((data: any) => {
            this.actions = data.eligibleActions;
            setTimeout(() => {
                _.remove(this.actions, (a) => {
                    return a === 'CANCEL' || a === 'REJECT';
                });
            }, (300000 - moment().diff(data.modificationDate)));

        });
    }

    prepareData() {
        if (this.uploadImageService.images.length === 0) {
            this.uploadImageService.load('request/' + this.id + '/', 0);
        }
        Object.assign(this.config, {
            selected: this.getSelected()
        });
        this.ready = true;
        this.changeRef.detectChanges();
        this.address = this.lookupsService.getGovernorateById(this.item.address.governorateId).nameEn
            + ' ' + this.lookupsService.getDistrictById(this.item.address.governorateId, this.item.address.districtId).nameEn
            + ' ' + (this.item.address.extraInfo ? this.item.address.extraInfo : '');
    }

    submitAction(action) {
        if (action === 'ON_DELIVERY' && !this.price) {
            this.sharedService.errorToast('Fill price first please');
            return;
        }
        this.requestService.process(action, this.id, undefined, this.price).subscribe(() => {
            this.price = undefined;
            this.customOnInit();
        });
    }

    private getSelected() {
        switch (this.item.statusId) {
            case 3:
            case 4:
            case 7:
                return 2;
            case 5:
            case 6:
                return this.item.statusId - 3;
            default:
                return this.item.statusId - 1;
        }
    }

    checkStep() {
        return this.item && this.item?.statusId !== 3 && this.item?.statusId !== 4 && this.item?.statusId !== 7;
    }

    ngOnDestroy(): void {
        this.notificationSubscription.unsubscribe();
    }
}
