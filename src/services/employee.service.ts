import { Injectable } from '@angular/core';
import { EmployeeListComponent } from 'src/app/pages/employee/employee-list/employee-list.component';
import dataDummy from 'src/assets/dataDummy';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: any = dataDummy.employee;

  getEmployeeById(id: any): EmployeeListComponent | any {
    const employee = this.employees.filter((employee: any) => {
      return employee.id == id;
    });
    return employee;
  }

  updateEmployee(employed: EmployeeListComponent) {
    try {
      const index = this.employees.findIndex(
        (employee: EmployeeListComponent) => employee.id === employed.id
      );

      if (index !== -1) {
        this.employees[index].firstName = employed.firstName;
        this.employees[index].lastName = employed.lastName;
        this.employees[index].email = employed.email;
        this.employees[index].birthDate = employed.birthDate;
        this.employees[index].basicSalary = employed.basicSalary;
        this.employees[index].status = employed.status;
        this.employees[index].group = employed['group'];
        this.employees[index].description = employed.description;

        console.log('Employee updated successfully:', this.employees[index]);
      } else {
        throw new Error('Employee not found');
      }
    } catch (error) {
      console.error('Error updating employee:', error);
      throw new Error('Error updating employee');
    }
  }

  getDummyData(): any[] {
    return this.employees;
  }

  postEmployeeData(employee: any): EmployeeListComponent | any {
    const newEmployeeId = dataDummy.employee.length + 1;
    employee.birthDate = Number(employee.birthDate)
    const newEmployee = { id: newEmployeeId, ...employee };
    this.employees.push(newEmployee);
    return newEmployee;
  }
}
