import {Component} from '@angular/core';
import {Shared} from '../../sharedComponent';
import {SharedService} from '../../../services/shared.service';
import {LookupsService} from '../../../services/lookups.service';
import {AddEditAccessoryPage} from './add-edit-accessory/add-edit-accessory.page';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-accessories',
    templateUrl: './accessories.page.html',
    styleUrls: ['./accessories.page.scss'],
})
export class AccessoriesPage extends Shared {
    url = 'accessory';
    categories = [];
    searchInputs = [{
        name: 'name En',
        key: 'nameEn',
        type: 'text'
    }, {
        name: 'name Ar',
        key: 'nameAr',
        type: 'text'
    }, {
        name: 'Category',
        key: 'categoryId',
        type: 'select',
        options: this.categories
    }, {
        name: 'On Sale',
        key: 'sale',
        type: 'select',
        options: [{id: true, nameEn: 'Yes'}, {id: false, nameEn: 'No'}]
    }];
    addEditAccessory = AddEditAccessoryPage;

    constructor(public sharedService: SharedService, private lookupsService: LookupsService,
                private sanitizer: DomSanitizer) {
        super(sharedService);
    }

    customOnInit() {
        this.lookupsService.listCategories().subscribe((categories: any) => {
            this.categories.push(...categories);
        });
    }

    handleData() {
        for (const item of this.list) {
            if (item.img) {
                item.srcImg = this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64,' + item.img);
            }
        }
    }
}
