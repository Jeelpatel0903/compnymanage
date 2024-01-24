import { Component, OnInit } from '@angular/core';
import { Branch } from '../Model/Branch';
import { User } from '../Model/User';
import { ActivatedRoute } from '@angular/router';

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

  branchDetails:Branch[]=[
    {branchId:201,companyId:101,branchName:"Reliance",branchCount:4},
    {branchId:202,companyId:102,branchName:"Adani",branchCount:5},
    {branchId:203,companyId:103,branchName:"Balaji",branchCount:6},
    {branchId:204,companyId:104,branchName:"Britaniya",branchCount:3},
    {branchId:205,companyId:105,branchName:"Sunfeast",branchCount:2},
  ]

  constructor(private active:ActivatedRoute) { }

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
  }
}
