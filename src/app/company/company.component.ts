import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  EditFormVisible: boolean = false;
  count:number = 0;
  id:number | null = null 
  name:string | null = null
  location:string | null = null
  gst:number | null = null

  // datavalue:{name:string,age:number}[]=[]

  constructor(private active:ActivatedRoute,private service:CompnayService){
    this.ngOnInit
  }
  companyDetails:Company[]=[]

    
  
  ngOnInit(): void {
    console.log(this.companyDetails);
    
    // localStorage.setItem("CompanyDetails",JSON.stringify(this.companyDetails))
    const userdata = sessionStorage.getItem('loguser')
    this.companyDetails = this.service.getdata()
    this.count = this.companyDetails.length
    // this.companyDetails = this.active.snapshot.data['data']

  //  this.active.data.subscribe((s)=>{
  //  this.datavalue = s['hobby']
  //  console.log(this.datavalue);
  
   
   
    
  //   })

    if(userdata){
      this.LoginUser = JSON.parse(userdata)
    }

  // this.userroll =  this.active.snapshot.queryParamMap.get('userroll')
    

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
    // this.companyDetails=this.service.companyDetails;

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
      // console.log(this.getIndex);
      
      this.companyDetails.splice(this.getIndex,1)
      Swal.fire({
        title: "Good job!",
        text: "Your Item Delete SuccessFully",
        icon: "success"
      });
      this.service.getlenthofdata()
    }
  }
  EditBtnClick(data:Company){
    this.EditFormVisible = true;

    this.getIndex = this.companyDetails.findIndex((e)=>{
      return e.CompanyId === data.CompanyId
    })

   this.id = data.CompanyId
   this.name = data.CompanyName
    this.location = data.CompanyLocation
    this.gst = data.CompanyGst

  

  }

  UpdateUSerDetails(){
    this.companyDetails[this.getIndex!].CompanyId = this.id
    this.companyDetails[this.getIndex!].CompanyName = this.name
    this.companyDetails[this.getIndex!].CompanyLocation = this.location
    this.companyDetails[this.getIndex!].CompanyGst = this.gst
    this.name = ""
    this.location = ""
    this.EditFormVisible = false;
  }
  addfavourite(item:Company){
    this.service.addfav(item)

  }
}