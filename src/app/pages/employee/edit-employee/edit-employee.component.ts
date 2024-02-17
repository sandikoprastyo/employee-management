import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../../services/employee.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class EditEmployeeComponent implements OnInit {
  employee: EmployeeListComponent | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(id)
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employee = this.employeeService.getEmployeeById(id);
    if (!this.employee) {
      this.router.navigateByUrl('/employee-list');
    }
  }

  onSaveChanges(): void {
    // Implement logic to save the changes to the employee
    // For example, you can call a service method to update the employee details
    if (this.employee) {
      this.employeeService.updateEmployee(this.employee);
      console.log(`Changes saved for employee with ID: ${this.employee.id}`);
    }

    // Redirect back to the employee list page
    this.router.navigateByUrl('/employee-list');
  }
}
