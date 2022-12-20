import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar-student',
  templateUrl: './navbar-student.component.html',
  styleUrls: ['./navbar-student.component.css']
})
export class NavbarStudentComponent implements OnInit {

  username:string | null;
  public employerName:string


  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onSearch() {
    localStorage.setItem("employer-search-param", this.employerName);
    this.router.navigate(["/user-search"]);
  }
}
