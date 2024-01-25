import { Injectable, inject } from '@angular/core';
import { UserService } from './user.service';
import Swal from 'sweetalert2';
import { User } from '../Model/User';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private islogin:string = "Authkey"
  constructor(private route:Router) { }

  users:User[]=[]
  roll:string | null = null

  LoginFunction(Username:string,UserPassword:string): boolean{
    
    if(Username === "" || UserPassword === "")
   {
    Swal.fire("Please Input All Fild");
    return false
   }
    console.log(Username);
    
    const userdata = localStorage.getItem('Userdata')
    
    if(userdata){
      this.users = JSON.parse(userdata)
    }

    const founduser = this.users.findIndex((user)=>{
      return user.Username === Username && user.Userpassword === UserPassword
    })
    console.log(founduser);
    

    if(founduser == -1){
      return false
    }
    else
    {
      this.users[founduser].islogin = true
      localStorage.setItem('loguser', JSON.stringify(this.users[founduser]));
      localStorage.setItem('token',JSON.stringify(this.islogin))
      this.roll = this.users[founduser].Userroll
      this.route.navigate(['/dashbord'] , {queryParams:{userlroll : this.users[founduser].Userroll}})
      return true
    }
  }
  logout(): void {
    // Remove the token from local storage
    localStorage.removeItem('token');
    this.route.navigate(['/login'])
  }

}
