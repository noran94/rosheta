import {Component, OnInit, ViewChild} from '@angular/core';
import {Shared} from '../../sharedComponent';
import {SharedService} from '../../../services/shared.service';
import {CategoriesService} from '../../../services/categories.service';

@Component({
    selector: 'app-accessories',
    templateUrl: './accessories.page.html',
    styleUrls: ['./accessories.page.scss'],
})
export class AccessoriesPage extends Shared {
    @ViewChild('form', {static: true}) form: any;
    url = 'accessory';
    categories;

    constructor(public sharedService: SharedService, private categoryService: CategoriesService) {
        super(sharedService);
    }

    customOnInit() {
        this.categoryService.listSimpleCategories().subscribe(categories => {
            this.categories = categories;
        });
    }


}
