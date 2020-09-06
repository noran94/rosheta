import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll, ModalController} from '@ionic/angular';
import {SharedService} from 'src/app/services/shared.service';
import {Shared} from '../../sharedComponent';
import {ModalPage} from '../../shared/modal/modal.page';

@Component({
    selector: 'app-products',
    templateUrl: './products.page.html',
    styleUrls: ['./products.page.scss'],
})
export class ProductsPage extends Shared {
    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
    @ViewChild('form', {static: true}) form: any;

    url = 'product';

    constructor(public sharedService: SharedService, public modalController: ModalController) {
        super(sharedService);
    }

    async openEditModal(item) {
        const modal = await this.modalController.create({
            component: ModalPage,
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
