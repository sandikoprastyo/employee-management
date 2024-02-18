import { Component, OnInit, Input } from '@angular/core';
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
  type = 'edit';
  selected = '';
  id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.employee = this.employeeService.getEmployeeById(this.id)[0];
    }

    if (!this.employee) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  async handleSave(): Promise<void> {
    if (this.employee) {
      await this.employeeService.updateEmployee(this.employee);
      await this.router.navigateByUrl('/dashboard');
    }
  }

  handleBackBtn() {
    this.router.navigateByUrl('/dashboard');
  }
}
