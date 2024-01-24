import { Component, OnInit } from '@angular/core';
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

  constructor(private active:ActivatedRoute,private service:BranchService) { }

  ngOnInit(): void {

    const userdata = localStorage.getItem('loguser')
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
    if(this.userroll === "Basic-Use")
    {
      this.EditBtn = false;
      this.DeleteBtn = false
    }
     this.branchDetails = this.service.branchDetails;
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
}
