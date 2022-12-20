import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../config/config.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: any[];

  constructor(private router: Router, private httpClient:ConfigService) {
    this.httpClient.findAllJobs().subscribe({
      next: (response) => this.jobs = response,
      error: (error) => this.router.navigate(["/not-found"])
    });
  }

  ngOnInit(): void {
  }

  onApply(jobId:string){
    let email = localStorage.getItem("userEmail");
    this.httpClient.createJobApplication({
      "studentEmail": email,
      "jobId": jobId
    }).subscribe({
      next: (response) => {
        alert("Application submitted");
      },
      error: (error) => {
        alert("Unable to submit application")
      }
    })

  }

}
