import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { Salary } from './shared/salary.model';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'employee', component:EmployeeDetailsComponent},
  {path:'salary', component:EmployeeSalaryComponent},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
