import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() data;
  @Input() title;
  @ViewChild('form', { static: true }) form: any;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    this.modalCtrl.dismiss({
      'data': this.form.value
    });
  }

}
