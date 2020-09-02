import { OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { NgForm } from '@angular/forms';

export abstract class Shared implements OnInit {
    list;
    disabledLoading = false;
    isList = true;
    abstract url;
    id;
    abstract form;
    constructor(public sharedService: SharedService) { }
    ngOnInit() {
        this.sharedService.pageNumber = 0;
        if (this.isList) {
            this.listItems();
        }
    }
    listItems() {
        this.sharedService.listItems(this.form.value, this.url).subscribe((data: any) => {
            this.list = data.data;
        });
    }
    addItem() {
        this.sharedService.addItem(this.form.value, this.url).subscribe((data) => {
            console.log(data);
        })
    }
    editItem() {
        this.sharedService.editItem(this.form.value, this.url).subscribe((data) => {
            console.log(data);
        })
    }
    deleteItem() {
        this.sharedService.deleteItem(this.id, this.url).subscribe((data) => {
            console.log(data);
            this.searchItem();
        })
    }
    searchItem() {
        this.disabledLoading = false;
        this.list = [];
        this.listItems();

    }
    getItem() {
        this.sharedService.getItem(this.id, this.url).subscribe((data) => {
            console.log(data);
        })
    }
    loadData(event) {
        if (this.disabledLoading) {
            return;
        }
        setTimeout(() => {
            console.log('Done');
            event.target.complete();
            this.sharedService.pageNumber++;
            this.listItems();
        }, 500);
    }
}