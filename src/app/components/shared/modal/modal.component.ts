import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
    @Input() data;
    @Input() inputs;
    @Input() title;
    @ViewChild('form', {static: true}) form: any;

    constructor(public modalCtrl: ModalController) {
    }

    ngOnInit() {

    }

    dismiss() {
        this.modalCtrl.dismiss({
            data: this.form.value
        });
    }

    cancel() {
        this.modalCtrl.dismiss();
    }

    resetValue(controlName) {
        this.form.form.controls[controlName].reset();
    }
}
