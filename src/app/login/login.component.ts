import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ConfigService} from "../config/config.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  test: number = 3;
  userPassword: string = "";
  userEmail: string = "";

  constructor(private router: Router, private httpClient: ConfigService) {

  }

  ngOnInit(): void {
  }

  onClickSignUpButton(){
    this.router.navigate(['/register']);
  }
  onClickLoginButton(){
    this.validateCredentials(this.userEmail, this.userPassword);
  }
  validateCredentials(email: string, password: string) {
    this.httpClient.loginRequest(
      {
        "email": email,
        "password": password
      }
    ).subscribe({
      next: (response) => {/*
          this.router.navigateByUrl('/home', {
            state: {username: response}
          });
          let data = {
            'username': response
          }*/
        localStorage.setItem("username", response);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        alert(error.error);
      }
    });
  }


}
