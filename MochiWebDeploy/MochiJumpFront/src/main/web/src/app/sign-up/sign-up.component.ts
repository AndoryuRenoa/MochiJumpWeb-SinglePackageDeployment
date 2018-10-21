import { Component, OnInit, OnDestroy } from '@angular/core';
import {ShowLoginService} from '../show-login.service';
import {ShowLogoutService} from '../show-logout.service';
import { UserInfoService } from '../user-info.service';
import { Router } from '@angular/router';
import {SignUpServiceService} from '../sign-up-service.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy{

  newUserTemplate = {userFirstName: '', userName: '', emailAddress:'', password: ''};

  signupComplete : boolean = false;

  constructor(private showLoginService: ShowLoginService, private showLogout: ShowLogoutService, private router: Router,
  private userInfo: UserInfoService, private signUp: SignUpServiceService) { }

  ngOnInit() {
   
  }
  signup(){
    this.signUp.attemptSignUP(this.newUserTemplate, ()=>{
      console.log("signup attempted");

    });

  }

  saveName(userName :string){
    this.userInfo.setUserName(userName);
    this.signUpCompleted();
  }

  signUpCompleted(){
    this.signupComplete = true;
    console.log("signup button pressed");
    this.showLoginService.changeShowStatus(false);
    this.showLogout.changeShowStatus(true);
    this.router.navigate(['/signUpComplete']);
  }

  ngOnDestroy(){
    if (this.signupComplete === false){
      this.showLoginService.changeShowStatus(true);
    } else{

    }

  }

}