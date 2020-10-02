import {Component} from '@angular/core';
import {Shared} from '../sharedComponent';
import {SharedService} from '../../services/shared.service';
import {LookupsService} from '../../services/lookups.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NativeGeocoder, NativeGeocoderResult} from '@ionic-native/native-geocoder/ngx';
import {Platform} from '@ionic/angular';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
    providers: [Geolocation, NativeGeocoder]
})
export class RegisterPage extends Shared {
    url = 'user';
    governorates;
    districts;
    isList = false;
    defaultValue = true;
    type;
    isCurrentAddress = true;

    constructor(public sharedService: SharedService,
                private lookupsService: LookupsService,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                public geolocation: Geolocation,
                public nativeGeocoder: NativeGeocoder,
                public platform: Platform) {
        super(sharedService, geolocation, nativeGeocoder, platform);
    }

    customOnInit() {
        this.type = +this.activatedRoute.snapshot.paramMap.get('id');
        this.governorates = this.lookupsService.governorates;
        this.getCurrentLocation();
    }

    listDistricts() {
        this.form.form.get('districtId').reset();
        if (!this.form.form.get('governorateId').value) {
            this.districts = [];
            return;
        }
        this.lookupsService.listDistricts(this.form.form.get('governorateId').value).subscribe(districts => {
            this.districts = districts;
        });
    }

    register() {
        if (!this.form.valid) {
            return;
        }
        if (this.form.form.get('password').value !== this.form.form.get('confirm').value) {
            this.sharedService.errorToast('Password does not match');
            return;
        }
        const request = JSON.parse(JSON.stringify(this.form.value));
        request.addresses = [{
            extraInfo: request.address,
            districtId: request.districtId,
            governorateId: request.governorateId,
            lat: this.lat,
            lng: this.lng
        }];
        request.roleId = this.type;
        request.language = 'en';
        if (this.type === 2) {
            request.pharmacy = {
                commercialRegister: 'commercial register',
                restrictToDistrict: request.restrictToDistrict,
                disableRequests: false
            };
        }
        this.addItem(false, request).then(error => {
            if (!error) {
                this.router.navigate(['login']);
            }
        });
    }

    resetAddress() {
        this.form.form.get('address').setValue(this.isCurrentAddress ? this.address : '');
    }
}
