import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { ADMIN_MENU, CLIENT_MENU, PHARMACY_MENU } from '../menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  @Input() headerName;
  menuList;
  constructor(private menu: MenuController, private user: UserService) { }

  ngOnInit() {
    if (this.user.isAdmin()) {
      this.menuList = ADMIN_MENU;
    }
    else if (this.user.isPharmacy()) {
      this.menuList = PHARMACY_MENU;
    }
    else if (this.user.isClient()) {
      this.menuList = CLIENT_MENU;
    }

  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }
  closeMenu() {
    this.menu.close();
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  logout(){
    console.log('here');
  }
}
