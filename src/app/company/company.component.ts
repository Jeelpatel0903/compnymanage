import { Component, OnInit } from '@angular/core';
import { Company } from '../Model/Compnay';
import { User } from '../Model/User';
import { ActivatedRoute } from '@angular/router';

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
  companyDetails:Company[]=[
    {CompanyId:101,CompanyName:"Reliance",CompanyLocation:"Ahmedabad",CompanyGst:12345},
    {CompanyId:102,CompanyName:"Adani",CompanyLocation:"Rajkot",CompanyGst:67890},
    {CompanyId:103,CompanyName:"Balaji",CompanyLocation:"Surat",CompanyGst:13525},
    {CompanyId:104,CompanyName:"Britaniya",CompanyLocation:"Baroda",CompanyGst:85743},
    {CompanyId:105,CompanyName:"Sunfeast",CompanyLocation:"bhavnagar",CompanyGst:65345},
  ]

  constructor(private active:ActivatedRoute){}


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
  }
}
