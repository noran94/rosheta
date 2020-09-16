import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SharedService} from './shared.service';

@Injectable({
    providedIn: 'root'
})
export class LookupsService {
    url = 'lookups/';

    constructor(private http: HttpClient) {
    }

    listCategories() {
        return this.http.get(this.url + 'categories');
    }

    listGovernorates() {
        return this.http.get(this.url + 'governorates');
    }

    listDistricts(governmentId: number) {
        return this.http.get(this.url + governmentId + '/districts');
    }
}
