import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { ADMIN_MENU, CLIENT_MENU, PHARMACY_MENU } from '../menu';
import { Location } from '@angular/common';
import {LoginService} from '../../../services/login.service';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss']
})
export class HeaderPage implements OnInit {

  @Input() headerName;
  @Input() disableBack;
  menuList;
  constructor(private menu: MenuController, private user: UserService,
              private location: Location,
              private router: Router,
              private storage: Storage,
              private loginService: LoginService) { }

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

  closeMenu() {
    this.menu.close();
  }

  logout(){
    this.closeMenu();
    this.loginService.logout().subscribe(() => {
      this.storage.clear();
      this.user.setUser(undefined);
      this.router.navigate(['/login']);
    }, () => {
      this.storage.clear();
      this.user.setUser(undefined);
      this.router.navigate(['/login']);
    });
  }

  back() {
    this.location.back();
  }
}
