import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RequestService {
    url = 'request/';

    constructor(private http: HttpClient) {
    }

    getRequestLog(requestId: number) {
        return this.http.get(this.url + '/' + requestId + '/log');
    }

    initiate(requestDTO) {
        return this.http.post(this.url + 'initiate/SUBMIT/1', requestDTO);
    }

    process(action: string, requestId: number, comments?, price?) {
        return this.http.put(this.url + action + '/' + requestId + '/process', {comment: comments, price: price});
    }

    getEligibleActions(id) {
        return this.http.get(this.url + 'eligible-actions/' + id);
    }
}
