import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ConfigService} from "../config/config.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  student:boolean;
  employer:boolean;

  name:string;
  email:string;
  password:string;
  username:string;

  industry:string;
  location:string;

  university:string;
  major:string;
  gpa:number;



  constructor(private router: Router, private httpClient:ConfigService) {
    this.student = true;
    this.employer = false;
  }

  ngOnInit(): void {
  }
  onClickLogInButton(){
    this.router.navigate(['/login']);
  }

  onClickRegisterButton() {
    this.student ? this.registerStudent() : this.registerEmployer();
  }

  registerStudent() {
    this.httpClient.registrationRequest(
      {
        "userType": "STUDENT",
        "name": this.name,
        "username": this.username,
        "email": this.email,
        "password": this.password,
        "university": this.university,
        "major": this.major,
        "gpa": this.gpa
      }
   ).subscribe({
        next: (response) => {
          alert("Registration successful! Please log in.");
          this.router.navigate(["/login"]);
        },
        error: (error) => alert(error)
   });

  }
  registerEmployer() {
    this.httpClient.registrationRequest(
      {
        "userType": "EMPLOYER",
        "name": this.name,
        "username": this.username,
        "email": this.email,
        "password": this.password,
        "industry": this.industry,
        "location": this.location
      }
    ).subscribe({
      next: (response) => {
        alert("Registration successful! Please log in.");
        this.router.navigate(["/login"]);
      },
      error: (error) => {
        alert(error);
      }
    });

  }

  onSelectEmployerAccount() {
    this.employer = true;
    this.student = false;

  }

  onSelectStudentAccount() {
    this.student = true;
    this.employer = false

  }

  onSelectionChange(value: string) {
    if(value === "Student"){
      this.onSelectStudentAccount();
    }
    else this.onSelectEmployerAccount();

  }
}
