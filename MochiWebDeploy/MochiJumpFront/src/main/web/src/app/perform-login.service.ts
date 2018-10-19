import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerformLoginService {

  loginURL = "/login";

  constructor(private http : HttpClient) { }

  postLogin(username: string, password: string){

    return this.http.post<any>(this.loginURL, {username: username, password: password},
      { observe: 'response' }, ).subscribe((res) => console.log(res));

  }



}
