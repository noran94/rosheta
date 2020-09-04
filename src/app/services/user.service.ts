import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;

  constructor(private storage: Storage) { }

  getUserFromStorage() {
    this.storage.get('user').then(user => {
      this.user = user;
    });
  }

  setUser(user) {
    return this.user = user;
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
}
