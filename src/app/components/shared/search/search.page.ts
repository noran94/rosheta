import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from '../modal/modal.component';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements AfterViewInit {
    @Input() inputs;
    @Input() addLabel;
    @Input() isAdd = false;
    @Input() customAddModal;
    @ViewChild('form', {static: true}) form: any;
    @Output() onSearch = new EventEmitter();
    @Output() onAdd = new EventEmitter();
    @Output() onFormInitialized = new EventEmitter();
    isHidden = true;

    constructor(private modalController: ModalController) {
    }

    ngAfterViewInit() {
        this.onFormInitialized.emit(this.form);
    }

    clear() {
        this.form.reset();
        this.search();
    }

    search() {
        this.isHidden = true;
        this.onSearch.emit(this.form);
    }

    resetValue(controlName) {
        this.form.form.controls[controlName].reset();
    }

    async openAddModal() {
        const modal = await this.modalController.create({
            component: this.customAddModal || ModalComponent,
            cssClass: 'my-custom-class',
            componentProps: {
                inputs: this.inputs,
                title: 'Add ' + this.addLabel
            }
        });
        await modal.present();
        const data = await modal.onWillDismiss();
        if (data.data) {
            if (data.data === 'reload') {
                this.search();
                return;
            }
            this.form.form.patchValue(data.data.data);
            this.onAdd.emit(true);
        }
    }

}
