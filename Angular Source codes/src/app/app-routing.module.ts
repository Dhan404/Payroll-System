import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { SalaryCalculationComponent } from './salary-calculation/salary-calculation.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { UpdateSalaryComponent } from './update-salary/update-salary.component';
import { SalaryDetailsComponent } from './salary-details/salary-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  {path:'employees',component:EmployeeListComponent,canActivate:[AuthGuard]},
  {path:'create-employee',component:CreateEmployeeComponent,canActivate:[AuthGuard]},
  {path:'salaries',component:SalaryCalculationComponent,canActivate:[AuthGuard]},
 // {path:'',redirectTo:'employees',pathMatch:'full'},
  {path:'update-employee/:id',component:UpdateEmployeeComponent,canActivate:[AuthGuard]},
  {path:'employee-details/:id',component:EmployeeDetailsComponent,canActivate:[AuthGuard]},
  {path:'add-salary',component:AddSalaryComponent,canActivate:[AuthGuard]},
  {path:'update-employee/:id',component:UpdateEmployeeComponent,canActivate:[AuthGuard]},
  {path:'update-salary/:id',component:UpdateSalaryComponent,canActivate:[AuthGuard]},
  {path:'salary-details/:id',component:SalaryDetailsComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
