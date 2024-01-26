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

  branchDetails:Branch[]=[]

  @ViewChild('id')id!:ElementRef;
  @ViewChild('name')name!:ElementRef;
  @ViewChild('count')count!:ElementRef;
  @ViewChild('compnayid')compnayid!:ElementRef;

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
    this.getIndex = this.branchDetails.findIndex((e)=>{
      return e.branchId === data.branchId
    })
    
    this.id.nativeElement.value = data.branchId
    this.name.nativeElement.value = data.branchName
    this.count.nativeElement.value = data.branchCount
    this.compnayid.nativeElement.value = data.companyId

  }

  UpdateUSerDetails(){
    this.branchDetails[this.getIndex!].branchId = this.id.nativeElement.value
    this.branchDetails[this.getIndex!].branchName = this.name.nativeElement.value
    this.branchDetails[this.getIndex!].branchCount = this.count.nativeElement.value
    this.branchDetails[this.getIndex!].companyId = this.compnayid.nativeElement.value

    this.id.nativeElement.value = ""
    this.name.nativeElement.value = ""
    this.count.nativeElement.value = ""
    this.compnayid.nativeElement.value = ""

  }
}
