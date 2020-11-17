import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
})
export class LookupsService {
    url = 'lookups/';
    products = [];
    governorates = [];

    constructor(private http: HttpClient) {
        this.listAllProducts();
        this.listGovernorates();
    }

    listCategories() {
        return this.http.get(this.url + 'categories');
    }

    listGovernorates() {
        return this.http.get(this.url + 'governorates', {params: new HttpParams().set('disableLoader', 'true')}).subscribe((data: any) => {
            this.governorates.push(...data);
        });
    }

    listDistricts(governmentId: number) {
        return this.getGovernorateById(governmentId).districts;
    }

    listAllProducts() {
        this.http.get(this.url + 'products', {params: new HttpParams().set('disableLoader', 'true')}).subscribe((data: any) => {
            this.products.push(...data);
        });
    }

    getGovernorateById(govId: number) {
        return _.find(this.governorates, {id: govId});
    }

    getDistrictById(govId: number, distId: number) {
        return _.find(this.listDistricts(govId), {id: distId});
    }
}
