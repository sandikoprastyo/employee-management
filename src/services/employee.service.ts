import { Injectable } from '@angular/core';
import { EmployeeListComponent } from 'src/app/pages/employee/employee-list/employee-list.component';
import dataDummy from 'src/assets/dataDummy';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: any;
  getEmployeeById(id: number): import("../app/pages/employee/employee-list/employee-list.component").EmployeeListComponent | undefined {
    try {
      return this.employees.find((employee: { id: number; }) => employee.id === id);
    } catch (error) {
      throw new Error('Method not implemented.');
      
    }
  }
  updateEmployee(employee: EmployeeListComponent) {
    throw new Error('Method not implemented.');
  }
  private dummyData: any[] = dataDummy.employee;

  getDummyData(): any[] {
    return this.dummyData;
  }
}
