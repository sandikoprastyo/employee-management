import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent {
  selected = '';
  employee = {
    firstname: '',
    lastname: '',
    email: '',
    birthdate: '',
    basicsalary: '',
    status: '',
    group: '',
    description: '',
  };

  constructor(private router: Router) {}

  handleBackBtn() {
    this.router.navigateByUrl('/dashboard');
  }

  handleSave() {
    console.log('Form submitted:', this.employee);
  }
}
