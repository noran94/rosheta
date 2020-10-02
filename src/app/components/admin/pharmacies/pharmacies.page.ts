import {Component} from '@angular/core';
import {Shared} from '../../sharedComponent';
import {SharedService} from '../../../services/shared.service';
import {LookupsService} from '../../../services/lookups.service';

@Component({
    selector: 'app-pharmacies',
    templateUrl: './pharmacies.page.html',
    styleUrls: ['./pharmacies.page.scss'],
})
export class PharmaciesPage extends Shared {
    url = 'user';
    governorates = [];
    districts = [];
    initFilter = {
        roleId: 2
    };
    yesNoOption = [{id: true, nameEn: 'Yes'}, {id: false, nameEn: 'No'}];
    searchInputs = [{
        name: 'name',
        key: 'name',
        type: 'text'
    }, {
        name: 'Governorate',
        key: 'governorateId',
        type: 'select',
        options: this.governorates,
        callback: this.listDistricts.bind(this)
    }, {
        name: 'District',
        key: 'districtId',
        type: 'select',
        options: this.districts
    }, {
        name: 'Disabled Requests',
        key: 'disableRequests',
        type: 'select',
        options: this.yesNoOption
    }, {
        name: 'Restricted to District',
        key: 'restrictToDistrict',
        type: 'select',
        options: this.yesNoOption
    }
    ];

    constructor(public sharedService: SharedService, private lookupsService: LookupsService) {
        super(sharedService);
    }

    customOnInit() {
        this.governorates = this.lookupsService.governorates;
    }

    listDistricts() {
        this.form.form.get('districtId').reset();
        if (!this.form.form.get('governorateId').value) {
            this.districts = [];
            return;
        }
        this.lookupsService.listDistricts(this.form.form.get('governorateId').value).subscribe((districts: any) => {
            this.districts.push(...districts);
        });
    }
}
