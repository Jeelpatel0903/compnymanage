import { Component, OnInit } from '@angular/core';
import { Company } from '../Model/Compnay';
import { User } from '../Model/User';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';
import { CompnayService } from '../services/compnay.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  LoginUser!:User
  EditBtn:boolean = false
  DeleteBtn:boolean = false
  userroll:string | null = null
  getIndex:number | null = null
  
  constructor(private active:ActivatedRoute,private service:CompnayService){}
  companyDetails:Company[]=[]

  ngOnInit(): void {
    localStorage.setItem("CompanyDetails",JSON.stringify(this.companyDetails))
    // const userdata = localStorage.getItem('loguser')

    // if(userdata){
    //   this.LoginUser = JSON.parse(userdata)
    // }

  this.userroll =  this.active.snapshot.queryParamMap.get('userroll')

    

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
    this.companyDetails=this.service.companyDetails;

  }

  DeleteBtnClik(data:Company){
    this.getIndex = this.companyDetails.findIndex((e)=>{
      return e.CompanyId === data.CompanyId
    })
    if(this.getIndex === -1){
      return
    }
    else
    {
      console.log(this.getIndex);
      
      this.companyDetails.splice(this.getIndex,1)
      Swal.fire({
        title: "Good job!",
        text: "Your Item Delete SuccessFully",
        icon: "success"
      });
    }
  }
}
