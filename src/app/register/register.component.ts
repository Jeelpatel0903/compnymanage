import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../Model/User';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userid:number = 0
  @ViewChild('name')name!: ElementRef;
  @ViewChild('password')password!: ElementRef;

  userdata:User[]=[
    {Userid:1,Username:"Jeel",Userpassword:"123456",Userroll:"Super-Admin",islogin:false},
    {Userid:2,Username:"Arjun",Userpassword:"111111",Userroll:"Admin",islogin:false},
    {Userid:3,Username:"Manthan",Userpassword:"000000",Userroll:"Basic-User",islogin:false}
  ]
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  registerFunction() {
    const username = this.name.nativeElement.value;
    const userpassword = this.password.nativeElement.value;
  
    // Validation checks
    if (username === "" || userpassword === "") {
      Swal.fire("Please Input All Fields");
      return;
    }
  
    if (username.length < 3 || username.length > 20) {
      Swal.fire("Username must be between 3 and 20 characters");
      return;
    }
  
    if (userpassword.length < 6) {
      Swal.fire("Password must be at least 6 characters");
      return;
    }
  
    this.userdata.push({
      Userid: this.userdata.length + 1,
      Username: username,
      Userpassword: userpassword,
      Userroll: "Basic-User",
      islogin: false
    });
  
    localStorage.setItem("Userdata", JSON.stringify(this.userdata));
  
    this.name.nativeElement.value = "";
    this.password.nativeElement.value = "";
  

    Swal.fire({
      title: "Good job!",
      text: "You are Successfully Added",
      icon: "success"
    });
  
    this.route.navigate(['login']);
  }
  
  



}
