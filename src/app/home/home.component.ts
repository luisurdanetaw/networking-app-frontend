import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ConfigService} from "../config/config.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private readonly username:string;
  public name:any;
  public email:any;
  public university:any;
  public major:any;
  public gpa:any;



  constructor(private router: Router, private httpClient: ConfigService) {
    /*
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras.state as {
      username: string
    };
    this.username = state.username;*/
    let username = localStorage.getItem("username");
    if(username !== null) {
      this.httpClient.getStudentPage(username).subscribe({
        next: (response) => {
          this.name = response.name;
          this.university = response.university;
          this.major = response.major;
          this.gpa = response.gpa;
          this.email = response.email;
          localStorage.setItem("userEmail", response.email);
        },
        error: (error) => console.log(error)
      });
    } else this.router.navigate(['/not-found']);
  }


  ngOnInit(): void {
  }

}
