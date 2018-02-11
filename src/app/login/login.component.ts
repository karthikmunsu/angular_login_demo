import { Component, OnInit } from '@angular/core';
//import the login service
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {

  constructor(private service: LoginService) { }


public login(uname, pwd) {
	this.service.getLoginData(uname, pwd).subscribe(
		(res) => {
			console.log(res);
		}, (err) => {
			console.log(err);
		})
}// login function definition
//thats all we have done the login functionality
// now i will show you how to upload this folder to git hub

  ngOnInit() {
  }

}


// go to your node js server and open the index.js file 
// the error throws because we are not sending the json data from the backend just we are sending the success 
// failure message alone that is not needed in this case so we are going to change the response data format.
// let us open the index.js file on your node server

