import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/services/employee.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent {
  selected = '';
  type = 'add';
  employee = {
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    basicSalary: '',
    status: '',
    group: '',
    description: '',
  };

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private _snackBar: MatSnackBar
  ) {}

  handleBackBtn() {
    this.router.navigateByUrl('/dashboard');
  }

  handleSave() {
    if (
      !this.employee.firstName ||
      !this.employee.lastName ||
      !this.employee.email ||
      !this.employee.birthDate ||
      !this.employee.basicSalary ||
      !this.employee.status ||
      !this.employee.group ||
      !this.employee.description
    ) {
      this.openSnackBar('Please fill in all fields', 'Close');
      return;
    }

    this.employee.birthDate = (`${new Date(this.employee.birthDate).getTime()}`);
    try {
      this.employeeService.postEmployeeData(this.employee);
      this.router.navigateByUrl('/dashboard');
    } catch (error) {
      throw error;
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
