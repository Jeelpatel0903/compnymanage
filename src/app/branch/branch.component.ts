import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Branch } from '../Model/Branch';
import { User } from '../Model/User';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { BranchService } from '../services/branch.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  LoginUser!:User
  EditBtn:boolean = false
  DeleteBtn:boolean = false
  userroll:string | null = null
  getIndex:number | null = null
  EditFormVisible: boolean = false;


  branchDetails:Branch[]=[]

  id:string | null = null
  name:string | null = null
  count:string | null = null
  compnayid:string | null = null

  constructor(private active:ActivatedRoute,private service:BranchService) { }

  ngOnInit(): void {

    const userdata = sessionStorage.getItem('loguser')
    // this.userroll =  this.active.snapshot.queryParamMap.get('userroll')
    this.branchDetails = this.service.branchDetails;


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
  }
  DeleteBtnClik(data:Branch){
    this.getIndex = this.branchDetails.findIndex((e)=>{
      return e.branchId === data.branchId
    })
    if(this.getIndex === -1){
      return
    }
    else
    {
      console.log(this.getIndex);
      
      this.branchDetails.splice(this.getIndex,1)
      Swal.fire({
        title: "Good job!",
        text: "Your Item Delete SuccessFully",
        icon: "success"
      });
    }
  }
  EditBtnClick(data:Branch){
    this.EditFormVisible = true;

    this.getIndex = this.branchDetails.findIndex((e)=>{
      return e.branchId === data.branchId
    })
    
    this.id = data.branchId
    this.name = data.branchName
    this.count = data.branchCount
    this.compnayid = data.companyId

  }

  UpdateUSerDetails(){
    this.branchDetails[this.getIndex!].branchId = this.id
    this.branchDetails[this.getIndex!].branchName = this.name
    this.branchDetails[this.getIndex!].branchCount = this.count
    this.branchDetails[this.getIndex!].companyId = this.compnayid
    this.EditFormVisible = false;

  }
}
