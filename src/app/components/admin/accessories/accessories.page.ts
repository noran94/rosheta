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
    @ViewChild('form', {static: true}) form: any;
    url = 'accessory';
    categories;

    constructor(public sharedService: SharedService, private lookupsService: LookupsService) {
        super(sharedService);
    }

    customOnInit() {
        this.lookupsService.listCategories().subscribe(categories => {
            this.categories = categories;
        });
    }


}
