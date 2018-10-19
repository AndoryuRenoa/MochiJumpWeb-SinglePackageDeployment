import { Component, OnInit } from '@angular/core';
import {ShowLoginService} from '../show-login.service';
import {PerformLoginService} from '../perform-login.service';


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

  attemptLogin(userName : string, password:string){
    this.peformLogin.postLogin(userName, password);
  }

}