import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';
import { ActivatedRoute } from '@angular/router';
// import { EmployeeService } from '../services/employee.service';
// import { Employee } from '../Model/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  LoginUser!:User
  EditBtn:boolean = false
  DeleteBtn:boolean = false
  userroll:string | null = null
   EmployeeData:User[]=[
    {Userid:1,Username:"Jeel",Userpassword:"123456",Userroll:"Super-Admin",islogin:false},
    {Userid:2,Username:"Arjun",Userpassword:"00000",Userroll:"Admin",islogin:false},
    {Userid:3,Username:"Manthan",Userpassword:"1234",Userroll:"Basic-User",islogin:false},
    {Userid:4,Username:"Mayur",Userpassword:"12345",Userroll:"Basic-User",islogin:false},
    {Userid:5,Username:"Ayuhsi",Userpassword:"123456",Userroll:"Admin",islogin:false},
   ]
  
   constructor(private active:ActivatedRoute){}
  ngOnInit(): void {
  // this.EmployeeData = this.employeeServices.getEmployeeDetails()
  localStorage.setItem("Employee",JSON.stringify(this.EmployeeData))
  // const userdata = localStorage.getItem('loguser')
  this.userroll =  this.active.snapshot.queryParamMap.get('userroll')

    // if(userdata){
    //   this.LoginUser = JSON.parse(userdata)
    // }

    if(this.userroll === "Super-Admin")
    {
      this.EditBtn = true;
      this.DeleteBtn = true
    }
    if(this.userroll === "Admin")
    {
      this.EditBtn = true;
      this.DeleteBtn = false
    }
    if(this.userroll === "Basic-User")
    {
      this.EditBtn = false;
      this.DeleteBtn = false
    }
    
  }
}
