import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private userService: UserService,
    private router: Router) {}

  ngOnInit() {
    if(!this.userService.getCurrentUser()) {
      this.router.navigate(['login']);
    }
    else if(this.userService.isAdmin()) {
      this.router.navigate(['admin']);
    }
    else if(this.userService.isClient()) {
      this.router.navigate(['client']);
    }
    else if(this.userService.isPharmacy()) {
      this.router.navigate(['pharmacy']);
    }
  }

}
