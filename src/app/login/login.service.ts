import { Injectable } from '@angular/core';

//importing the needed files
import { HttpClient } from '@angular/common/http'; //this is file needed for http get put post delete request
import { Observable } from 'rxjs/Observable'; //if you dont import this file compiler will complain.
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  public getLoginData(uname, pwd) {
  	return this.http.get('http://localhost:3000/login?username=' + uname + '&password=' + pwd).map(
  		(res)=> res)
  }// api call to your node server login api..

}
