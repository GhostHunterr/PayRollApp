import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from './employees.model';
import { Salary } from './salary.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'http://localhost:5041/api/Employee';
  
  readonly baseURL1 = 'http://localhost:5041/api/Pay';

  formData:Employees = new Employees();

  list!:Employees[];

  Salary = new Salary();

  listsalary!:Salary[];


  postEmployeeDetail(){
    return this.http.post(this.baseURL, this.formData);
  }

  putEmployeeDetail(){
    return this.http.put(`${this.baseURL}/${this.formData.emp_id}`, this.formData);
  }

  deleteEmployeeDetail(emp_id:number){
    return this.http.delete(`${this.baseURL}/${emp_id}`);
  }


  refreshlist(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as Employees[])
  }

  refreshSalary(){
    this.http.get(this.baseURL1)
    .toPromise()
    .then(res => this.listsalary = res as Salary[]);
  }

}
