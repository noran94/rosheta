import {Component, ViewChild} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {SharedService} from 'src/app/services/shared.service';
import {Shared} from '../../sharedComponent';
import {ModalPage} from '../../shared/modal/modal.page';

@Component({
    selector: 'app-category',
    templateUrl: './category.page.html',
    styleUrls: ['./category.page.scss'],
})
export class CategoryPage extends Shared {
    @ViewChild('form', {static: true}) form: any;

    url = 'category';

    constructor(public sharedService: SharedService, public modalController: ModalController) {
        super(sharedService);
    }

    async openEditModal(item) {
        const modal = await this.modalController.create({
            component: ModalPage,
            cssClass: 'my-custom-class',
            componentProps: {
                data: item,
                title: 'Edit Category'
            }
        });
        await modal.present();
        const data = await modal.onWillDismiss();
        this.editItem(data.data.data);
    }
}
