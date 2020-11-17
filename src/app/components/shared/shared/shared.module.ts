import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageViewerComponent} from '../image-viewer/image-viewer.component';
import {HeaderPageModule} from '../header/header.module';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [ImageViewerComponent],
  imports: [
    CommonModule,
    HeaderPageModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    ImageViewerComponent
  ]
})
export class SharedModule { }
