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

  @ViewChild('id')id!:ElementRef;
  @ViewChild('name')name!:ElementRef;
  @ViewChild('location')location!:ElementRef;
  @ViewChild('gst')gst!:ElementRef;

  
  constructor(private active:ActivatedRoute,private service:CompnayService){
    this.ngOnInit
  }
  companyDetails:Company[]=[]

  ngOnInit(): void {
    // localStorage.setItem("CompanyDetails",JSON.stringify(this.companyDetails))
    const userdata = sessionStorage.getItem('loguser')
    this.companyDetails = this.service.companyDetails
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
  EditBtnClick(data:Company){
    this.EditFormVisible = true;

    this.getIndex = this.companyDetails.findIndex((e)=>{
      return e.CompanyId === data.CompanyId
    })

    this.id.nativeElement.value = data.CompanyId
    this.name.nativeElement.value = data.CompanyName
    this.location.nativeElement.value = data.CompanyLocation
    this.gst.nativeElement.value = data.CompanyGst

  

  }

  UpdateUSerDetails(){
    this.companyDetails[this.getIndex!].CompanyId = this.id.nativeElement.value
    this.companyDetails[this.getIndex!].CompanyName = this.name.nativeElement.value
    this.companyDetails[this.getIndex!].CompanyLocation = this.location.nativeElement.value
    this.companyDetails[this.getIndex!].CompanyGst = this.gst.nativeElement.value

    this.id.nativeElement.value = ""
    this.name.nativeElement.value = ""
    this.location.nativeElement.value = ""
    this.gst.nativeElement.value = ""
    this.EditFormVisible = false;


  }
}