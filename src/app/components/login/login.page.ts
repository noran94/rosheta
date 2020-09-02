import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }
  login(form){
    this.loginService.login(form.value).subscribe((data)=>{
      console.log(data.headers.keys);

    })
  }

}
