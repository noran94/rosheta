import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  pageNumber = 0;
  pageSize = 10;
  products = [
    {
      id: 111,
      nameEn: 'noran',
      nameAr: 'نوران'
    },
    {
      id: 222,
      nameEn: 'amir',
      nameAr: 'امير'
    },
    {
      id: 222,
      nameEn: 'amir',
      nameAr: 'امير'
    },
    {
      id: 222,
      nameEn: 'amir',
      nameAr: 'امير'
    },
    {
      id: 222,
      nameEn: 'amir',
      nameAr: 'امير'
    },
    {
      id: 222,
      nameEn: 'amir',
      nameAr: 'امير'
    },
    {
      id: 222,
      nameEn: 'amir',
      nameAr: 'امير'
    },
    {
      id: 222,
      nameEn: 'amir',
      nameAr: 'امير'
    },
    {
      id: 222,
      nameEn: 'amir',
      nameAr: 'امير'
    },
    {
      id: 222,
      nameEn: 'amir',
      nameAr: 'امير'
    },
    {
      id: 222,
      nameEn: 'amir',
      nameAr: 'امير'
    },
    {
      id: 222,
      nameEn: 'amir',
      nameAr: 'امير'
    },
    {
      id: 222,
      nameEn: 'amir',
      nameAr: 'امير'
    },
    {
      id: 222,
      nameEn: 'amir',
      nameAr: 'امير'
    },
    {
      id: 222,
      nameEn: 'amir',
      nameAr: 'امير'
    },
    {
      id: 222,
      nameEn: 'amir',
      nameAr: 'امير'
    },
    {
      id: 222,
      nameEn: 'amir',
      nameAr: 'امير'
    },
    {
      id: 222,
      nameEn: 'amir',
      nameAr: 'امير'
    },
    {
      id: 222,
      nameEn: 'amir',
      nameAr: 'امير'
    }]
  constructor() { }

  ngOnInit() {
  }
  addProduct(from) {
    console.log(from);
  }
  editProduct(product){
    console.log(product);
  }
  deleteProduct(product){
    console.log(product);
  }
  searchProduct(){

  }
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      this.pageNumber++;
      // this.products.push(this.products[0]);
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length == 1000) {
      //   event.target.disabled = true;
      // }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
