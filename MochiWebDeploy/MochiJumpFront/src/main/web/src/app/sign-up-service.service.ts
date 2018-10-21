import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {
  signupURL = "/test/newUserCreation"



  constructor(private http : HttpClient) { }

  attemptSignUP(userTemplate, callback){

    this.http.post(this.signupURL, userTemplate).subscribe((res) =>
    console.log(JSON.stringify(res)))

    return callback && callback();

  }


}
