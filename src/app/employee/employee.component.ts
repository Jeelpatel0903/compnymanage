import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { EmployeeService } from '../services/employee.service';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';
import { User } from './../Model/User';
import { AuthserviceService } from '../services/authservice.service';


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
  getIndex:number | null = null
  EditFormVisible: boolean = false;
   EmployeeData:User[]=[]

   id:number | null = null
   name:string | null = null
   roll:string | null = null

  
   constructor(private active:ActivatedRoute,private service:UserService,private auth:AuthserviceService){}
  ngOnInit(): void {
  // this.EmployeeData = this.employeeServices.getEmployeeDetails()
  localStorage.setItem("Employee",JSON.stringify(this.EmployeeData))
  const userdata = sessionStorage.getItem('loguser')
  // this.userroll =  this.active.snapshot.queryParamMap.get('userroll')

  // this.userroll = this.auth.roll
    if(userdata){
      this.LoginUser = JSON.parse(userdata)
    }

    if(this.LoginUser.Userroll === "Super-Admin")
    {
      this.EditBtn = true;
      this.DeleteBtn = true
    }
    if(this.LoginUser.Userroll === "Admin")
    {
      this.EditBtn = true;
      this.DeleteBtn = false
    }
    if(this.LoginUser.Userroll === "Basic-User")
    {
      this.EditBtn = false;
      this.DeleteBtn = false
    }
    this.EmployeeData=this.service.user;
    
  }

  DeleteBtnClik(data:User){
    // this.EditFormVisible = false;
    this.getIndex = this.EmployeeData.findIndex((e)=>{
      return e.Userid === data.Userid
    })
    if(this.id === data.Userid && this.EditFormVisible)
    {
      this.EditFormVisible=false
    }
    if(this.getIndex === -1){
      return
    }
      console.log(this.getIndex);
      
      this.EmployeeData.splice(this.getIndex,1)
      Swal.fire({
        title: "Good job!",
        text: "Your Item Delete SuccessFully",
        icon: "success"
      });
  }
  EditBtnClick(data:User){
    this.EditFormVisible = true;
    this.getIndex = this.EmployeeData.findIndex((e)=>{
      return e.Userid === data.Userid
    })
    
    this.id = data.Userid
    this.name = data.Username
    this.roll = data.Userroll
  }


  UpdateUSerDetails(){
    this.EmployeeData[this.getIndex!].Userid = this.id
    this.EmployeeData[this.getIndex!].Username = this.name
    this.EmployeeData[this.getIndex!].Userroll = this.roll
    // this.id = ""
    this.name= ""
    this.roll = ""
    this.EditFormVisible = false;

  }



}
