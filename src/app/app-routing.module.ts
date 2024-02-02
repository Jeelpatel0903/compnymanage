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
import { NotfoundComponent } from './notfound/notfound.component';
import { RoleguardGuard } from './guard/roleguard.guard';

const routes: Routes = [
  {path:"", redirectTo:"register" , pathMatch:'full' },

  {path:"register",
  canActivate:[LoginGuard],
  canDeactivate:[RoleguardGuard],
  component:RegisterComponent},

  {path:"login",
  canActivate:[LoginGuard],
  canDeactivate:[RoleguardGuard],

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
      component:EmployeeComponent,
      canActivate:[RoleguardGuard],
      data:{role:'employee'},
      resolve:{resolvedata:RoleguardGuard}
    },
    {
      path:"compnay",
      component:CompanyComponent,
      canActivate:[RoleguardGuard],
      data:{role:'company',hobby:[{name:"manthan",age:"21"}]},
      // data:{name:'Jeel',gst:123},
      
    },{
      path:"branch",
      component:BranchComponent,
      canActivate:[RoleguardGuard],
      data:{role:'branch'},
      

    }
  ]
  
  },
  {
    path:"**",
    component:NotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
