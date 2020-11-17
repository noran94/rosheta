import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Shared} from '../../sharedComponent';
import {SharedService} from '../../../services/shared.service';
import {UserService} from '../../../services/user.service';
import {MessagingService} from '../../../services/messaging.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.page.html',
    styleUrls: ['./chat.page.scss'],
})
export class ChatPage extends Shared implements OnDestroy {
    url = 'chat';
    isList = false;
    user;
    notificationSubscription;

    constructor(public sharedService: SharedService,
                private userService: UserService,
                private activatedRoute: ActivatedRoute,
                private messagingService: MessagingService) {
        super(sharedService);
    }

    customOnInit() {
        if (!this.notificationSubscription) {
            this.notificationSubscription = this.messagingService.newRequestNotification.subscribe(() => {
                this.ionViewWillEnter();
            });
        }
        this.id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.getItem();
        this.user = this.userService.getCurrentUser();
        this.initFilter = {
            userId: this.user.id,
            requestId: this.id,
        };
    }

    ngOnDestroy(): void {
        this.notificationSubscription.unsubscribe();
    }
}
