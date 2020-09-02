import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { CategoriesService } from 'src/app/services/categories.service';
import { NgForm } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { Shared } from '../../sharedComponent';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage extends Shared {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild('form',  { static: true }) form: any;

  url = 'category';
  constructor(public sharedService: SharedService) {
    super(sharedService);
  }
}
