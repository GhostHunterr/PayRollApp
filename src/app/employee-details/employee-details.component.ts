import { Component } from '@angular/core';
import { EmployeesService } from '../shared/employees.service';
import { Employees } from '../shared/employees.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: ``,
})
export class EmployeeDetailsComponent {
  constructor(public service: EmployeesService) {}

  ngOnInit(): void {
    this.service.refreshlist();
  }

  populateForm(emp: Employees) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(emp_id: number) {
    if (confirm('Are you sure you want to delete this Employee?')) {
      this.service.deleteEmployeeDetail(emp_id).subscribe(
        (res) => {
          this.service.refreshlist();
        },
        (err) =>{ console.log(err)}
      );
    }
  }


}
