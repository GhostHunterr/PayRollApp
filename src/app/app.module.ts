import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EMployeeFormsComponent } from './employee-forms/employee-forms.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeDetailsComponent,
    EMployeeFormsComponent,
    EmployeeSalaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
