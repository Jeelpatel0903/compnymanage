import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { EmployeeService } from '../services/employee.service';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';
import { User } from './../Model/User';

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
   EmployeeData:User[]=[]

   @ViewChild('id')id!:ElementRef;
   @ViewChild('name')name!:ElementRef;
   @ViewChild('roll')roll!:ElementRef;

  
   constructor(private active:ActivatedRoute,private service:UserService){}
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
    this.EmployeeData=this.service.user;
    
  }

  DeleteBtnClik(data:User){
    this.getIndex = this.EmployeeData.findIndex((e)=>{
      return e.Userid === data.Userid
    })
    if(this.getIndex === -1){
      return
    }
    else
    {
      console.log(this.getIndex);
      
      this.EmployeeData.splice(this.getIndex,1)
      Swal.fire({
        title: "Good job!",
        text: "Your Item Delete SuccessFully",
        icon: "success"
      });
    }
  }
  EditBtnClick(data:User){
    this.getIndex = this.EmployeeData.findIndex((e)=>{
      return e.Userid === data.Userid
    })
    
    this.id.nativeElement.value = data.Userid
    this.name.nativeElement.value = data.Username
    this.roll.nativeElement.value = data.Userroll
  }

  UpdateUSerDetails(){
    this.EmployeeData[this.getIndex!].Userid = this.id.nativeElement.value
    this.EmployeeData[this.getIndex!].Username = this.name.nativeElement.value
    this.EmployeeData[this.getIndex!].Userroll = this.roll.nativeElement.value
    this.id.nativeElement.value = ""
    this.name.nativeElement.value = ""
    this.roll.nativeElement.value = ""

  }
}
