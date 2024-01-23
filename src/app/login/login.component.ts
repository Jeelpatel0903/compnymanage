import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { User } from '../Model/User';
import { User } from './../Model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @ViewChild('username')username!: ElementRef;
  @ViewChild('password')password!: ElementRef;
  users:User[]=[]
  
  constructor() { }

  ngOnInit(): void {
  }
  LoginFunction(){
    const Username= this.username.nativeElement.value;
    const UserPassword= this.password.nativeElement.value;
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
      alert("no")
      return
    }
    else
    {
      alert("yrs")
    }
    
    

  }

}
