import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SharedService} from './shared.service';

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
        return this.http.get(this.url + governmentId + '/districts');
    }

    listAllProducts() {
        this.http.get(this.url + 'products', {params: new HttpParams().set('disableLoader', 'true')}).subscribe((data: any) => {
            this.products.push(...data);
        });
    }
}
