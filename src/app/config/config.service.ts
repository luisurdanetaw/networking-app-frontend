import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class ConfigService {
  constructor(private httpClient: HttpClient) { }

  //Login endpoints
  loginRequest(data:any): Observable<any>{
    return this.httpClient.post("http://localhost:8081/api/v1/login/studentAuth", data, {responseType: "text"});
  }

  //Registration endpoints
  registrationRequest(data:any): Observable<any>{
    return this.httpClient.post("http://localhost:8081/api/v1/registration/register", data, {responseType: "text"});
  }

  //Student endpoints
  getStudentPage(username:string): Observable<any>{
    let url = "http://localhost:8081/api/v1/student/page/" + username;
    return this.httpClient.get(url);
  }

  //JobPostingEndpoints
  findAllJobs(): Observable<any>{
    let url = "http://localhost:8081/api/v1/jobs";
    return this.httpClient.get(url);
  }

  createJobApplication(data:any): Observable<any>{
    return this.httpClient.post("http://localhost:8081/api/v1/job-application/create", data, {responseType: "text"});
  }

  findAllJobApplications(email: string): Observable<any>{
    return this.httpClient.get("http://localhost:8081/api/v1/job-application/findAll?email=" + email);
  }

  searchEmployersByName(name: string): Observable<any>{
    return this.httpClient.get("http://localhost:8081/api/v1/employer/search?name=" + name)
  }
  findEmployerByUsername(username: string): Observable<any>{
    return this.httpClient.get("http://localhost:8081/api/v1/employer/page/" + username);
  }

  createConnection(data:any): Observable<any>{
    return this.httpClient.post("http://localhost:8081/api/v1/connections/create", data, {responseType: "text"})
  }
  findAllStudentConnections(email: string): Observable<any>{
    return this.httpClient.get("http://localhost:8081/api/v1/connections/findAllStudent?email=" + email);
  }




}
