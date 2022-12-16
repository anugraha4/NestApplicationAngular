import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AddemployeeComponent,
    EmployeeloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
