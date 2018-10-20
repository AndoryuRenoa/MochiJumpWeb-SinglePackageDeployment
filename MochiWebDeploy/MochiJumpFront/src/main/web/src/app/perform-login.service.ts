import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface LoginInfo {
  username : string;
  password : string;

}

@Injectable({
  providedIn: 'root'
})
export class PerformLoginService {

  loginURL = "/loginProcessor";

  constructor(private http : HttpClient) { }

  postLogin(username : string, password : string){
    let headers = new HttpHeaders ({
      'Authorization': 'basic' +btoa(username +':' + password), 
      'X-Requested-With': 'XMLHttpRequest'
    });

    let options =  {
      headers:headers

    };

    console.log("Hello!!!");
    console.log({username: username, password : password});
    console.log("{username: "+ username +"password :"+ password +"}" );

    return this.http.post(this.loginURL, {username: username, password : password}, options).subscribe((res) =>
    console.log(JSON.stringify(res)));

  }



}
