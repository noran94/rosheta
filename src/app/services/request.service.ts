import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SharedService} from './shared.service';

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

    process(action: string, requestId: number, comments) {
        return this.http.post(this.url + action + '/' + requestId, {comment: comments});
    }
}
