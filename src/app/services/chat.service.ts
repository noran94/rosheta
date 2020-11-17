import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ChatService {
    url = 'chat/';

    constructor(private http: HttpClient) {
    }

    getChat(requestId: number) {
        return this.http.get(this.url + requestId);
    }

    addChat(chatDTO) {
        return this.http.post(this.url, chatDTO);
    }
}
