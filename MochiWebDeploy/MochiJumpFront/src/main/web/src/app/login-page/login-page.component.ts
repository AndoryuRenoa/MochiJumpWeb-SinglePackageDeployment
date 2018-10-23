import { Component, OnInit } from '@angular/core';
import {ShowLoginService} from '../show-login.service';
import {PerformLoginService} from '../perform-login.service';
import {AuthenticateService} from'../authenticate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  credentials = {username: '', password: ''};


  constructor(private showLoginService: ShowLoginService,
     private peformLogin : PerformLoginService, private authenticate: AuthenticateService,
     private router : Router ) { }

  ngOnInit() {
    
  }

  hideMe(){
    this.showLoginService.changeShowStatus(false);
  }

  attemptLogin(username : string, password: string){
    this.authenticate.authenticate(this.credentials, ()=>{
      this.router.navigateByUrl('/');
        });
        return false;
  }

  doNothing(){

  }

}