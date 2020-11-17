import {Component} from '@angular/core';
import {SharedService} from '../../../services/shared.service';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Shared} from '../../sharedComponent';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-accessory-details',
    templateUrl: './accessory-details.page.html',
    styleUrls: ['./accessory-details.page.scss'],
})
export class AccessoryDetailsPage extends Shared {
    url = 'accessory';
    isList = false;

    constructor(public sharedService: SharedService,
                public userService: UserService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private sanitizer: DomSanitizer) {
        super(sharedService);
    }

    customOnInit() {
        this.id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.getItem(this.handleData.bind(this));
    }

    addToCart() {
        this.sharedService.addItem({
            accessoryId: this.item.id,
            quantity: 1
        }, 'cart').subscribe(() => {
            this.sharedService.successToast();
        });
    }

    handleData() {
        if (this.item.img) {
            this.item.srcImg = this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64,' + this.item.img);
        }
    }
}
