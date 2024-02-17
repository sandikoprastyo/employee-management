// employee-list.component.ts

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from '../../../../services/employee.service';
import { Router } from '@angular/router';
import dataDummy from 'src/assets/dataDummy';

interface Employee {
  id: number;
  username: string;
  firstName: string;
  password: string;
  lastName: string;
  email: string;
  birthDate: number;
  basicSalary: number;
  status: string;
  group: string;
  description: number;
  [key: string]: number | string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees: MatTableDataSource<Employee> = new MatTableDataSource<Employee>();
  pageSizeOptions: number[] = [10, 25, 50, 100];
  pageSize: number = 5;
  currentPage: number = 1;
  totalItems: number = 0;
  searchText: string = '';
  sortKey: string = '';
  sortDirection: string = 'asc';
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'birthDate',
    'basicSalary',
    'status',
    'group',
    'description',
    'actions',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  firstName: any;
  lastName: any;
  id: any;

  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    // Use dataDummy.employee as the source of dummy data
    const dummyData: Employee[] | any[] = dataDummy.employee;

    // Filter data based on search text
    const filteredData = dummyData.filter((employee) =>
      employee.firstName.toLowerCase().includes(this.searchText.toLowerCase())
    );

    // Sort data based on the selected column and direction
    const sortedData = this.sortData(filteredData);

    // Get the total count after filtering
    this.totalItems = filteredData.length;

    // Paginate data based on the calculated start and end index
    this.employees = new MatTableDataSource(
      sortedData.slice(startIndex, endIndex)
    );
    this.employees.paginator = this.paginator;
    this.employees.sort = this.sort;
  }

  private sortData(data: Employee[]): Employee[] {
    if (this.sortKey && this.sortDirection) {
      return data.sort((a, b) => {
        const aValue = a[this.sortKey];
        const bValue = b[this.sortKey];

        if (aValue > bValue) {
          return this.sortDirection === 'asc' ? 1 : -1;
        } else if (aValue < bValue) {
          return this.sortDirection === 'asc' ? -1 : 1;
        } else {
          return 0;
        }
      });
    }
    return data;
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.loadEmployees();
  }

  onPageSizeChange(): void {
    this.loadEmployees();
  }

  onSort(column: string): void {
    if (this.sortKey === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = column;
      this.sortDirection = 'asc';
    }
    this.loadEmployees();
  }

  onSearch(): void {
    this.currentPage = 1;
    this.loadEmployees();
  }

  onAddEmployee(): void {
    this.router.navigateByUrl('employed/add');
  }

  onEditEmployee(id: number): void {
    this.router.navigateByUrl(`employed/${id}`);
  }

  onDeleteEmployee(id: number): void {
    // Get the data array from the MatTableDataSource
    const data = this.employees.data;

    // Find the index of the employee with the given id
    const index = data.findIndex((employee) => employee.id === id);

    // Check if the employee with the given id exists
    if (index !== -1) {
      // Remove the employee from the array
      data.splice(index, 1);

      // Update the MatTableDataSource with the modified data
      this.employees.data = [...data];

      // Show a notification or perform any other necessary actions
      console.log(`Employee with ID ${id} deleted successfully.`);
    } else {
      // Handle the case when the employee with the given id is not found
      console.warn(`Employee with ID ${id} not found.`);
    }
  }

  onLogout() {
    this.router.navigateByUrl('/');
  }
}
