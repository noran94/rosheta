import {Component, ViewChild} from '@angular/core';
import {IonInfiniteScroll, ModalController} from '@ionic/angular';
import {SharedService} from 'src/app/services/shared.service';
import {Shared} from '../../sharedComponent';
import {ModalComponent} from '../../shared/modal/modal.component';

@Component({
    selector: 'app-products',
    templateUrl: './products.page.html',
    styleUrls: ['./products.page.scss'],
})
export class ProductsPage extends Shared {
    url = 'product';
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
                title: 'Edit Product'
            }
        });
        await modal.present();
        const data = await modal.onWillDismiss();
        this.editItem(data.data.data);
        console.log(data.data.data);

    }

}
