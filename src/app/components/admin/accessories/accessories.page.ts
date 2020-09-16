import {Component, ViewChild} from '@angular/core';
import {Shared} from '../../sharedComponent';
import {SharedService} from '../../../services/shared.service';
import {LookupsService} from '../../../services/lookups.service';

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
    constructor(public sharedService: SharedService, private lookupsService: LookupsService) {
        super(sharedService);
    }

    customOnInit() {
        this.lookupsService.listCategories().subscribe((categories: any) => {
            this.categories.push(...categories);
        });
    }


}
