import { OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { IonInfiniteScroll } from '@ionic/angular';

export abstract class Shared implements OnInit {
    list;
    disabledLoading = false;
    isList = true;
    abstract url;
    id;
    abstract form;
    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

    constructor(public sharedService: SharedService) {
    }

    ngOnInit() {
        this.sharedService.pageNumber = 0;
        if (this.isList) {
            this.listItems();
        }
        this.customOnInit();
    }

    listItems(event?) {
        this.sharedService.listItems(this.form.value, this.url).subscribe((data: any) => {
            if (event) {
                this.list.push(...data.data);
                this.infiniteScroll.complete();
            } else {
                this.list = data.data;
            }
            this.disabledLoading = this.list.length === data.total;
        }, () => {
            if (event) {
                this.infiniteScroll.complete();
            }
        });
    }

    addItem(reload?) {
        this.sharedService.addItem(this.form.value, this.url).subscribe((data) => {
            this.form.reset();
            if (reload) {
                this.searchItem();
            }
        });
    }

    editItem(modal?) {
        let data = modal ? modal : this.form.value;
        this.sharedService.editItem(data, this.url).subscribe((data) => {
            if (modal) {
                this.searchItem();
            }
        });
    }

    deleteItem(id?) {
        let data = id ? id : this.id;
        this.sharedService.deleteItem(data, this.url).subscribe((data) => {
            this.searchItem();
        });
    }

    searchItem() {
        this.disabledLoading = false;
        this.list = [];
        this.sharedService.pageNumber = 0;
        this.listItems();

    }

    getItem() {
        this.sharedService.getItem(this.id, this.url).subscribe((data) => {
            console.log(data);
        });
    }

    loadData(event) {
        if (this.disabledLoading) {
            this.infiniteScroll.complete();
            return;
        }
        this.sharedService.pageNumber++;
        this.listItems(true);
    }

    customOnInit() { }
}
