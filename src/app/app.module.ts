import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeListComponent } from './pages/employee/employee-list/employee-list.component';
import { EditEmployeeComponent } from './pages/employee/edit-employee/edit-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEmployeeComponent } from './pages/employee/add-employee/add-employee.component';
import { MatSelectModule } from '@angular/material/select';
import { FormEmployeeComponent } from './components/form-employee/form-employee.component';
import { DatePipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    FormEmployeeComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    MatDividerModule,
    BrowserModule,
    MatSlideToggleModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [NativeDateAdapter, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
