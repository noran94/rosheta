import {Component} from '@angular/core';
import {Shared} from '../sharedComponent';
import {SharedService} from '../../services/shared.service';
import {LookupsService} from '../../services/lookups.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions} from '@ionic-native/native-geocoder/ngx';

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
    defaultValue = true;
    type;
    lat = 0;
    lng = 0;
    options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
    };
    msg;

    constructor(public sharedService: SharedService,
                private lookupsService: LookupsService,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private geolocation: Geolocation,
                private nativeGeocoder: NativeGeocoder) {
        super(sharedService);
    }

    customOnInit() {
        this.type = +this.activatedRoute.snapshot.paramMap.get('id');
        this.lookupsService.listGovernorates().subscribe(governorates => {
            this.governorates = governorates;
        });
        this.geolocation.getCurrentPosition().then((resp) => {
            this.lat = resp.coords.latitude;
            this.lng = resp.coords.longitude;
            console.log(this.lat, this.lng);
            this.nativeGeocoder.reverseGeocode(this.lat, this.lng, this.options)
                .then((result: NativeGeocoderResult[]) => {
                    console.log(JSON.stringify(result[0]));
                    this.msg = JSON.stringify(result[0]);
                })
                .catch((error: any) => console.log(error));

            this.nativeGeocoder.forwardGeocode('Berlin', this.options)
                .then((result: NativeGeocoderResult[]) => console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude))
                .catch((error: any) => console.log(error));
        }).catch((error) => {
            console.log('Error getting location', error);
        });
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
            lat: 0,
            lng: 0
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
}
