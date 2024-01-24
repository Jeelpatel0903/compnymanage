import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { User } from '../Model/User';
import { User } from './../Model/User';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @ViewChild('username')username!: ElementRef;
  @ViewChild('password')password!: ElementRef;
  users:User[]=[]
  
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  LoginFunction(){
    const Username= this.username.nativeElement.value;
    const UserPassword= this.password.nativeElement.value;
    if(Username === "" || UserPassword === "")
   {
    Swal.fire("Please Input All Fild");
    return
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
      return
    }
    else
    {
      this.users[founduser].islogin = true
      localStorage.setItem('loguser', JSON.stringify(this.users[founduser]));
      this.route.navigate(['/dashbord'] , {queryParams:{userlroll : this.users[founduser].Userroll}})
    }
    
    

  }

}
