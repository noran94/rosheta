import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from '../models/user.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;

  constructor(private storage: Storage,
              private http: HttpClient) { }

  getUserFromStorage() {
    this.storage.get('user').then(user => {
      this.user = user;
    });
  }

  setUser(user) {
    return this.user = user;
  }

  updateUserStorage(user) {
    this.storage.set('user', user);
  }

  getCurrentUser() {
    return this.user;
  }

  isAdmin() {
    return  this.user.roleId === 1;
  }
  isPharmacy() {
    return  this.user.roleId === 2;
  }
  isClient() {
    return  this.user.roleId === 3;
  }

  addAddress(address) {
    return this.http.post('user/add-address', address);
  }
}
