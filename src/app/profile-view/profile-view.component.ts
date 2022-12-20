import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../config/config.service";

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  name:string;
  email:string;
  industry:string;
  location:string;


  constructor(private httpClient:ConfigService) {
    let username = localStorage.getItem('profile-view-username');
    if(username !== null) {
      this.httpClient.findEmployerByUsername(username).subscribe({
        next: (response) => {
          this.name = response.name;
          this.email = response.email;
          this.industry = response.industry;
          this.location = response.location;
        },
        error: (error) => console.log(error)
      })
    }
  }

  ngOnInit(): void {
  }

  onConnect(){
    this.httpClient.createConnection({
      "employerEmail": this.email,
      "studentEmail": localStorage.getItem("userEmail")
    }).subscribe({
      next: (response) => {
        alert("success");
      }
    })
  }
}
