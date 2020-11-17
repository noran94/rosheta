import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MonthlyReportService {
    url = 'monthly-report/';

    constructor(private http: HttpClient) {
    }

    setPaid(id: number) {
        return this.http.put(this.url + id, {});
    }
}
