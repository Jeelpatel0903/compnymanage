import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeComponent } from './employee/employee.component';
import { CompanyComponent } from './company/company.component';
import { BranchComponent } from './branch/branch.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginGuard } from './guard/login.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", component:RegisterComponent },

  {path:"register",
  canActivate:[LoginGuard],

  component:RegisterComponent},

  {path:"login",
  canActivate:[LoginGuard],
  component:LoginComponent},

  {path:"dashbord", 
  canActivate:[AuthGuard],
  component:DashbordComponent,
  children:[
    {
      path:"",
      component:HomeComponent
     },
    {
      path:"employee",
      component:EmployeeComponent
    },
    {
      path:"compnay",
      component:CompanyComponent
    },{
      path:"branch",
      component:BranchComponent
    }
  ]
  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
