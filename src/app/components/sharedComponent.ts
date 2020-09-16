import {OnInit, ViewChild} from '@angular/core';
import {SharedService} from '../services/shared.service';
import {IonInfiniteScroll, ToastController} from '@ionic/angular';

export abstract class Shared implements OnInit {
    list;
    disabledLoading = false;
    isList = true;
    abstract url;
    id;
    initFilter = {};
    @ViewChild('form', {static: true}) form: any;
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
        const filter = Object.assign(this.initFilter, this.form ? this.form.value : {});
        this.sharedService.listItems(filter, this.url).subscribe((data: any) => {
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

    async addItem(reload?, customRequest?) {
        const filter = Object.assign(this.initFilter, customRequest ? customRequest : this.form.value);
        return await this.sharedService.addItem(filter, this.url).toPromise().then(() => {
            this.form.reset();
            if (reload) {
                this.searchItem();
            }
            this.sharedService.successToast();
            return false;
        }, (error) => {
            this.sharedService.errorToast(error.error.message);
            return error;
        });
    }

    editItem(modal?) {
        const data = modal ? modal : this.form.value;
        const filter = Object.assign(this.initFilter, data);
        this.sharedService.editItem(filter, this.url).subscribe(() => {
            if (modal) {
                this.searchItem();
            }
            this.sharedService.successToast();
        }, (error) => {
            this.sharedService.errorToast(error.error.message);
        });
    }

    deleteItem(id?) {
        const data = id ? id : this.id;
        this.sharedService.deleteItem(data, this.url).subscribe(() => {
            this.searchItem();
            this.sharedService.successToast();
        }, (error) => {
            this.sharedService.errorToast(error.error.message);
        });
    }

    searchItem(form?) {
        this.form = form;
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

    resetValue(controlName) {
        this.form.form.controls[controlName].reset();
    }

    initForm(form: any) {
        this.form = form;
    }

    customOnInit() {
    }
}
