import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(form) {
    return this.http.post('login/authenticate', form,{observe:'response', withCredentials: true});
  }
  logout() {
    return this.http.post('logout', {});
  }
}
