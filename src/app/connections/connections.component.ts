import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../config/config.service";

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {

  connections:any[];
  constructor(private httpClient:ConfigService) {
    let email = localStorage.getItem("userEmail");
    if(email !== null){
      this.httpClient.findAllStudentConnections(email).subscribe({
        next: (response) => {
          this.connections = response;
        },
        error: (error) => console.log(error)
      });
    }
  }

  ngOnInit(): void {
  }

}
