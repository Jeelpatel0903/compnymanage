import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../Model/User';

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
   this.userdata.push({Userid:this.userdata.length+1,Username:username,Userpassword:userpassword,Userroll:"Basic-User"})
  localStorage.setItem("Userdata",JSON.stringify(this.userdata))
  }
}
