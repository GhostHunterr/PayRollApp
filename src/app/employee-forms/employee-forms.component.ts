import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeesService } from '../shared/employees.service';
import { Employees } from '../shared/employees.model';

@Component({
  selector: 'app-employee-forms',
  templateUrl: './employee-forms.component.html',
  styles: ``,
})
export class EMployeeFormsComponent {
  constructor(public service: EmployeesService) {}

  onSubmit(form: NgForm) {
    if (this.service.formData.emp_id == 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postEmployeeDetail().subscribe(
      (res) => {
        this.resetForm(form);
        this.service.refreshlist();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putEmployeeDetail().subscribe(
      (res) => {
        this.resetForm(form);
        this.service.refreshlist();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Employees();
  }
}
