import {Component, ViewChild} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {SharedService} from 'src/app/services/shared.service';
import {Shared} from '../../sharedComponent';
import {ModalComponent} from '../../shared/modal/modal.component';

@Component({
    selector: 'app-category',
    templateUrl: './category.page.html',
    styleUrls: ['./category.page.scss'],
})
export class CategoryPage extends Shared {
    url = 'category';
    searchInputs = [{
        name: 'name En',
        key: 'nameEn',
        type: 'text'
    }, {
        name: 'name Ar',
        key: 'nameAr',
        type: 'text'
    }];
    constructor(public sharedService: SharedService, public modalController: ModalController) {
        super(sharedService);
    }

    async openEditModal(item) {
        const modal = await this.modalController.create({
            component: ModalComponent,
            cssClass: 'my-custom-class',
            componentProps: {
                data: item,
                title: 'Edit Category'
            }
        });
        await modal.present();
        const data = await modal.onWillDismiss();
        if (data.data) {
            this.editItem(data.data.data);
        }
    }
}
