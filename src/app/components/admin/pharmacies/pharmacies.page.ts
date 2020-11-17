import {Component} from '@angular/core';
import {Shared} from '../../sharedComponent';
import {SharedService} from '../../../services/shared.service';
import {LookupsService} from '../../../services/lookups.service';
import {ModalComponent} from '../../shared/modal/modal.component';
import {ModalController} from '@ionic/angular';
import {AddEditAccessoryPage} from '../accessories/add-edit-accessory/add-edit-accessory.page';

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

    constructor(public sharedService: SharedService,
                private lookupsService: LookupsService,
                public modalController: ModalController) {
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
        this.districts.push(...this.lookupsService.listDistricts(this.form.form.get('governorateId').value));
    }

    // async openEditModal(item) {
    //     const modal = await this.modalController.create({
    //         component: EditUserPage,
    //         cssClass: 'my-custom-class',
    //         componentProps: {
    //             id: item.id,
    //             role: item.roleId
    //         }
    //     });
    //     await modal.present();
    //     const data = await modal.onWillDismiss();
    //     if (data.data) {
    //         this.editItem(data.data.data);
    //     }
    // }
}
