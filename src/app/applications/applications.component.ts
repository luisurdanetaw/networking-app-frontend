import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../config/config.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  hasApplications:boolean;
  applications:any[];
  userEmail:string;

  constructor(private httpClient:ConfigService, private router:Router) {
    let email = localStorage.getItem("userEmail");

    if(email !== null) {
      this.userEmail = email;
      this.httpClient.findAllJobApplications(email).subscribe({
        next: (response) => {
          this.applications = response;
          this.applications.length == 0 ? this.hasApplications = false : this.hasApplications = true;
        },
        error: (error) => {
          console.log(error);
          this.router.navigate(['/not-found']);
        }
      });
    } else this.router.navigate(['/not-found']);
  }

  ngOnInit(): void {
  }

}
