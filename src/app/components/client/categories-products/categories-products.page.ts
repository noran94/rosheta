import {Component, OnInit} from '@angular/core';
import {Shared} from '../../sharedComponent';
import {SharedService} from '../../../services/shared.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-categories-products',
    templateUrl: './categories-products.page.html',
    styleUrls: ['./categories-products.page.scss'],
})
export class CategoriesProductsPage extends Shared implements OnInit {
    url = 'category/with-products';

    constructor(public sharedService: SharedService,
                private sanitizer: DomSanitizer) {
        super(sharedService);
    }

    ngOnInit(): void {
        this.initFilter = {
            notEmptyList: true
        };
        this.ionViewWillEnter();
    }

    handleData() {
        for (const item of this.list) {
            if (item.img) {
                item.srcImg = this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64,' + item.img);
            }
        }
    }

}
