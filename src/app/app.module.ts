import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarStudentComponent } from './navbar-student/navbar-student.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";

import {ConfigService} from "./config/config.service";
import { NavbarEmployerComponent } from './navbar-employer/navbar-employer.component';
import { JobsComponent } from './jobs/jobs.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ConnectionsComponent } from './connections/connections.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarStudentComponent,
    UserSearchComponent,
    LoginComponent,
    RegisterComponent,
    NavbarEmployerComponent,
    JobsComponent,
    NotFoundComponent,
    ConnectionsComponent,
    ApplicationsComponent,
    ProfileViewComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'user-search', component: UserSearchComponent},
      {path: 'home', component: HomeComponent},
      {path: 'jobs', component: JobsComponent},
      {path: 'connections', component: ConnectionsComponent},
      {path: 'applications', component:ApplicationsComponent},
      {path: 'not-found', component: NotFoundComponent},
      {path: 'profile-view', component: ProfileViewComponent},
      {path: '', redirectTo: '/login', pathMatch: 'full'},

    ]),
    FormsModule,
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
