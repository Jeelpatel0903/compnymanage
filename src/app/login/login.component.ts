import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { User } from '../Model/User';
import { User } from './../Model/User';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cango:boolean=false

  @ViewChild('username')username!: ElementRef;
  @ViewChild('password')password!: ElementRef;
   
  users:User[]=[]
  
  constructor(private route:Router,private auth:AuthserviceService) { }

  ngOnInit(): void {
  }

  canDeactivateAccess(){
    if((this.username.nativeElement.value || this.password.nativeElement.value) && !this.cango){
      return confirm("are you sure")
    }
    else{
      return true
    }
}

  LoginFunction(){
    const username= this.username.nativeElement.value;
    const password= this.password.nativeElement.value;
    this.cango =true
    this.auth.LoginFunction(username,password)

  }


}