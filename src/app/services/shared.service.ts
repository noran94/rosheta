import {Injectable} from '@angular/core';
import {HttpParams, HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    pageNumber;
    private pageSize = 10;

    constructor(private http: HttpClient) {
    }

    listItems(formValue, url) {
        return this.http.get(url, {params: this.getFilter(formValue)});
    }

    addItem(item, url) {
        return this.http.post(url, item);
    }

    editItem(item, url) {
        return this.http.put(url, item);
    }

    deleteItem(id, url) {
        return this.http.delete(url + '/' + id);
    }

    getItem(id, url) {
        return this.http.get(url + '/' + id);
    }

    getFilter(formValue) {
        let params = new HttpParams();
        for (const key in formValue) {
            if (formValue[key] !== undefined && formValue[key] !== null && formValue[key] !== '') {
                params = params.set(key, formValue[key]);
            }
        }
        params = params.set('pageNum', this.pageNumber);
        params = params.set('pageSize', this.pageSize.toString());
        return params;
    }
}
