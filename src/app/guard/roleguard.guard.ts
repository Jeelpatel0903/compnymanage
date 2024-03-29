import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanDeactivate, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../services/authservice.service';
import { User } from '../Model/User';
import Swal from 'sweetalert2';
import { RegisterComponent } from '../register/register.component';
import { UserService } from './../services/user.service';

export interface DeactivateInterface{
  canDeactivateAccess():boolean
}


@Injectable({
  providedIn: 'root'
})


export class RoleguardGuard implements CanActivate,CanDeactivate<DeactivateInterface>,Resolve<User[]>{
  a!:User
  constructor(private active:ActivatedRoute, private authservice:AuthserviceService ,private route:Router,private userservice:UserService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const requirerole1 = route.data['role'];
      // const requirerole2 = route.data['role2'];
      // const requirerole3 = route.data['role3'];
      
      const  existuserRole = sessionStorage.getItem('loguser')
      if(existuserRole){
        this.a = JSON.parse(existuserRole)
      }
      // console.log(requirerole1,existuserRole);
      console.log(existuserRole);
      console.log(requirerole1);
      
      if(this.a.Permission.includes(requirerole1))
      {
        return true
      }
      else
      {
        this.route.navigate(['/dashbord'])
        Swal.fire({
          title:'Can Not Access',
          icon:'warning'
        })
        return false;
        
      }
      
    }
    
    canDeactivate(component: DeactivateInterface, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      
      return component.canDeactivateAccess()

    }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
      return this.userservice.getdata()
    }

}
