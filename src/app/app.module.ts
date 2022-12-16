import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { SecurityloginComponent } from './securitylogin/securitylogin.component';
import { AddsecurityComponent } from './addsecurity/addsecurity.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { RouterModule, Routes } from '@angular/router';
const myRoute:Routes=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"addEmployee",
    component:AddemployeeComponent
  },
  {
    path:"addSecurity",
    component:AddsecurityComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AddemployeeComponent,
    EmployeeloginComponent,
    SecurityloginComponent,
    AddsecurityComponent,
    AdminNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
