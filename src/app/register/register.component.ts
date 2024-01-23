import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../Model/User';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userid:number = 0
  @ViewChild('name')name!: ElementRef;
  @ViewChild('password')password!: ElementRef;

  userdata:User[]=[]
  constructor() { }

  ngOnInit(): void {
  }

  registerFunction(){
   const  username = this.name.nativeElement.value
   const userpassword = this.password.nativeElement.value
   if(username === "" || userpassword === "")
   {
    Swal.fire("Please Input All Fild");
   }
   this.userdata.push({Userid:this.userdata.length+1,Username:username,Userpassword:userpassword,Userroll:"Basic-User",islogin:false})
  localStorage.setItem("Userdata",JSON.stringify(this.userdata))
  }
  



}
