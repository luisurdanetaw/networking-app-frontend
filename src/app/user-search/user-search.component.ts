import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../config/config.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  employers:any[];
  constructor(private httpClient: ConfigService, private router: Router) {
    let name = localStorage.getItem("employer-search-param");
    if (name !== null){
      this.httpClient.searchEmployersByName(name).subscribe({
        next: (response) => this.employers = response,
        error: (error) => console.log(error)
      });
    }

  }

  ngOnInit(): void {
  }

  onClickEmployer(username:string) {
    this.router.navigate(['/profile-view']);
    localStorage.setItem('profile-view-username', username);
  }
}
