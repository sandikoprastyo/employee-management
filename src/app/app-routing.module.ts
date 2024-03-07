import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { AddEmployeeComponent } from './pages/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './pages/employee/edit-employee/edit-employee.component';
import { AppComponent } from './app.component';
import { AuthGuardService } from 'src/services/auth-guard.service';

const routes: Routes = [
  { path: '*', redirectTo: '', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'employed/add', component: AddEmployeeComponent, canActivate: [AuthGuardService] },
  { path: 'employed/:id', component: EditEmployeeComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
