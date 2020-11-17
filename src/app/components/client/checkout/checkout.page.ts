import {Component} from '@angular/core';
import {Shared} from '../../sharedComponent';
import {SharedService} from '../../../services/shared.service';
import {LookupsService} from '../../../services/lookups.service';
import {UserService} from '../../../services/user.service';
import {ModalController, Platform} from '@ionic/angular';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NativeGeocoder} from '@ionic-native/native-geocoder/ngx';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalComponent} from '../../shared/modal/modal.component';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.page.html',
    styleUrls: ['./checkout.page.scss'],
    providers: [Geolocation, NativeGeocoder]
})
export class CheckoutPage extends Shared {
    url = 'checkout';
    isList = false;
    products;
    addresses;
    governorates = [];
    districts = [];
    inputs = [{
        name: 'Governorate',
        key: 'governorateId',
        type: 'select',
        options: this.lookupsService.governorates,
        callback: this.listDistricts.bind(this)
    }, {
        name: 'District',
        key: 'districtId',
        type: 'select',
        options: this.districts
    }, {
        name: 'Current Address',
        key: 'isCurrentAddress',
        type: 'switcher',
        callBack: this.resetAddress.bind(this),
        value: false
    }, {
        name: 'address',
        key: 'extraInfo',
        type: 'text',
        disabled: false
    }];
    addressDTO: any;
    price;

    constructor(public sharedService: SharedService,
                private lookupsService: LookupsService,
                private userService: UserService,
                public geolocation: Geolocation,
                public nativeGeocoder: NativeGeocoder,
                public platform: Platform,
                private modalController: ModalController,
                private activatedRoute: ActivatedRoute,
                private router: Router,) {
        super(sharedService, geolocation, nativeGeocoder, platform);
    }


    customOnInit() {
        this.price = +this.activatedRoute.snapshot.paramMap.get('price');
        this.addresses = this.userService.getCurrentUser().addresses;
        this.addressDTO = this.addresses[0];
        this.governorates = this.lookupsService.governorates;
        this.getCurrentLocation();
    }

    order() {
        if (!this.form.value.addressDTO) {
            this.form.value.addressDTO = this.addresses[0];
        }
        const request = JSON.parse(JSON.stringify(this.form.value));
        request.products = request.products.join();
        console.log(request);
    }

    callback() {
        this.sharedService.successToast();
        this.router.navigate(['']);
    }

    async addAddress() {
        const modal = await this.modalController.create({
            component: ModalComponent,
            componentProps: {
                inputs: this.inputs,
                title: 'Add Address'
            }
        });
        await modal.present();
        const data = await modal.onWillDismiss();
        if (data.data) {
            this.saveAddress(data.data.data);
        }
    }

    private saveAddress(data: any) {
        const address = data;
        address.userId = this.userService.getCurrentUser().id;
        address.lat = this.lat;
        address.lng = this.lng;
        this.userService.addAddress(address).subscribe((addre: any) => {
            this.sharedService.successToast();
            address.id = addre.id;
            const governorate = this.lookupsService.getGovernorateById(address.governorateId);
            address.governorateNameEn = governorate.nameEn;
            address.governorateNameAr = governorate.nameAr;
            const district = this.lookupsService.getDistrictById(governorate.id, address.districtId);
            address.districtNameEn = district.nameEn;
            address.districtNameAr = district.nameAr;
            this.userService.getCurrentUser().addresses.unshift(address);
            this.userService.updateUserStorage(this.userService.getCurrentUser());
            this.addressDTO = address;
        });
    }

    mapValueToForm(address: CustomEvent) {
        this.form.value.addressDTO = address.detail.value;
    }

    listDistricts(form) {
        form.form.get('districtId').reset();
        if (!form.form.get('governorateId').value) {
            this.districts = [];
            return;
        }
        this.districts.splice(0);
        this.districts.push(...this.lookupsService.listDistricts(form.form.get('governorateId').value));
    }

    resetAddress(form) {
        form.form.controls['extraInfo'].setValue(this.inputs[2].value ? this.address : '');
        this.inputs[3]['disabled'] = this.inputs[2].value;
    }
}
