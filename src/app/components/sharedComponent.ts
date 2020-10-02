import {OnInit, ViewChild} from '@angular/core';
import {SharedService} from '../services/shared.service';
import {IonInfiniteScroll, Platform, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult} from '@ionic-native/native-geocoder/ngx';

export abstract class Shared implements OnInit {
    list;
    disabledLoading = false;
    isList = true;
    abstract url;
    id;
    initFilter = {};
    @ViewChild('form', {static: true}) form: any;
    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
    lat = 0;
    lng = 0;
    options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
    };
    address;

    constructor(public sharedService: SharedService,
                public geolocation?: Geolocation,
                public nativeGeocoder?: NativeGeocoder,
                public platform?: Platform) {
    }

    ngOnInit() {
        this.customOnInit();
        this.sharedService.pageNumber = 0;
        if (this.isList) {
            this.listItems();
        }
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

    resetValue(controlName) {
        this.form.form.controls[controlName].reset();
    }

    initForm(form: any) {
        this.form = form;
    }

    getCurrentLocation() {
        this.platform.ready().then(async (data) => {
            this.geolocation.getCurrentPosition({
                maximumAge: 60000,
                timeout: 30000,
                enableHighAccuracy: true
            }).then((resp) => {
                console.log(resp);
                this.lat = resp.coords.latitude;
                this.lng = resp.coords.longitude;
                this.nativeGeocoder.reverseGeocode(this.lat, this.lng, this.options)
                    .then((result1: NativeGeocoderResult[]) => {
                        console.log(JSON.stringify(result1[0]));
                        this.address = JSON.stringify(result1[0]);
                    })
                    .catch((error: any) => console.log('error', error));


            }).catch((error) => {
                console.log('Error getting location', error);
            });
        });
    }

    getLatLng() {
        if (!this.form.value.address) {
            this.lat = 0;
            this.lng = 0;
            return;
        }
        this.nativeGeocoder.forwardGeocode(this.form.value.address, this.options)
            .then((result: NativeGeocoderResult[]) => {
                if (result && result.length > 0) {
                    console.log('The coordinates are latitude='
                        + result[0].latitude + ' and longitude=' + result[0].longitude);
                    this.lat = +result[0].latitude;
                    this.lng = +result[0].longitude;
                } else {
                    console.log('no result from address');
                    this.lat = 0;
                    this.lng = 0;
                }
            })
            .catch((error: any) => console.log(error));
    }

    customOnInit() {
    }
}
