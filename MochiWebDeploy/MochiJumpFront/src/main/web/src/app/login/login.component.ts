import { Component, OnInit } from '@angular/core';
import {ShowLoginService} from '../show-login.service';
import {PerformLoginService} from '../perform-login.service';

export interface LoginInfo {
  username : string;
  password : string;

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  


  constructor(private showLoginService: ShowLoginService,
     private peformLogin : PerformLoginService ) { }

  ngOnInit() {
    
  }

  hideMe(){
    this.showLoginService.changeShowStatus(false);
  }

  attemptLogin(username : string, password: string){
    this.peformLogin.postLogin(username, password);
  }
  doNothing(){

  }

}