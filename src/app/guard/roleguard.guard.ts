import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../services/authservice.service';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class RoleguardGuard implements CanActivate {
  a!:User
  constructor(private active:ActivatedRoute, private authservice:AuthserviceService ,private route:Router){}
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
    this.route.navigate(['/dashbord'])
    return false;
  }
  
}
