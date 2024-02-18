import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.scss'],
})
export class FormEmployeeComponent {
  [x: string]: any;
  todayDate: Date | null;
  @Input() employee: any;
  @Input() selected: any;
  @Input() type: any;

  selectedGroup: string | undefined;
  groupControl = new FormControl();
  groups: string[] = [
    'Group 1',
    'Group 2',
    'Group 3',
    'Group 4',
    'Group 5',
    'Group 6',
    'Group 7',
    'Group 8',
    'Group 9',
    'Group 10',
  ];
  filteredGroups: string[] = this.groups;

  constructor(private datePipe: DatePipe) {
    this.todayDate = new Date();
    this.filteredGroups = this.groups;
  }

  selectGroup(group: string): void {
    this.employee.group = group;
  }

  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'DD-MM-YYYY') || '';
  }

  updateEmployeeBirthDate(value: any): void {
    this.employee.birthDate = new Date(value).getTime();
  }

  updateEmployeeDescription(value: any): void {
    this.employee.description = new Date(value).getTime();
  }

  convertTimestampToDate(timestamp: number): string {
    return new Date(timestamp).toISOString();
  }

  filterGroups(event: any): void {
    const value = event.target.value;
    this.filteredGroups = this.groups.filter((group) =>
      group?.toLowerCase().includes(value?.toLowerCase())
    );
  }
}
