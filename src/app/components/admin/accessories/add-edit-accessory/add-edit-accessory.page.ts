import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Shared} from '../../../sharedComponent';
import {SharedService} from '../../../../services/shared.service';
import {LookupsService} from '../../../../services/lookups.service';
import {UploadImageService} from '../../../../services/upload-image.service';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {Location} from '@angular/common';

@Component({
    selector: 'app-add-edit-accessory',
    templateUrl: './add-edit-accessory.page.html',
    styleUrls: ['./add-edit-accessory.page.scss'],
    providers: [UploadImageService]
})
export class AddEditAccessoryPage extends Shared {
    isEdit = false;
    url = 'accessory';
    categories = [];
    isList = false;
    sale = false;

    constructor(public modalCtrl: ModalController,
                private location: Location,
                public sharedService: SharedService,
                private lookupsService: LookupsService,
                public uploadImageService: UploadImageService,
                private activatedRoute: ActivatedRoute,
                private sanitizer: DomSanitizer) {
        super(sharedService);
    }


    customOnInit() {
        this.uploadImageService.isOne = true;
        this.id = +this.activatedRoute.snapshot.paramMap.get('id');
        if (this.id) {
            this.initFilter = {id: this.id};
            this.isEdit = true;
            this.getItem(this.fillForm.bind(this));
        }
        this.lookupsService.listCategories().subscribe((categories: any) => {
            this.categories.push(...categories);
        });
    }

    fillForm() {
        this.form.form.patchValue(this.item);
        if (this.item.img) {
            this.uploadImageService.images.push({
                src: this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + this.item.img),
                webPath: 'data:image/png;base64,' + this.item.img
            });
        }
    }

    dismiss() {
        this.sharedService.successToast();
        this.form.form.reset();
        if(this.isEdit) {
            return this.location.back();
        }
        this.modalCtrl.dismiss('reload');
    }

    add() {
        if (this.isEdit) {
            return this.editItem(undefined, this.upload.bind(this));
        }
        this.addItem(undefined, undefined, undefined, this.upload.bind(this));
    }

    upload(data) {
        if (!this.uploadImageService.changed) {
            return this.dismiss();
        }
        this.uploadImageService.upload('accessory/' + data.id, this.dismiss.bind(this));
    }

}
