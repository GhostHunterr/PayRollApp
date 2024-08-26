import { Component } from '@angular/core';
import { EmployeesService } from '../shared/employees.service';

@Component({
  selector: 'app-employee-salary',
  templateUrl: './employee-salary.component.html',
  styles: ``
})
export class EmployeeSalaryComponent {
  constructor(public service:EmployeesService){}

  ngOnInit():void{
    this.service.refreshSalary();
  }
}
