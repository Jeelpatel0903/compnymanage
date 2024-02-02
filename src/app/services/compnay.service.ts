import { Injectable } from '@angular/core';
import { Company } from '../Model/Compnay';
import { BehaviorSubject, Observable, Subject, } from 'rxjs';
import { data } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class CompnayService {

  constructor() { }

  

  companyDetails:Company[]=[
    {CompanyId:101,CompanyName:"Reliance",CompanyLocation:"Ahmedabad",CompanyGst:12345},
    {CompanyId:102,CompanyName:"Adani",CompanyLocation:"Rajkot",CompanyGst:67890},
    {CompanyId:103,CompanyName:"Balaji",CompanyLocation:"Surat",CompanyGst:13525},
    {CompanyId:104,CompanyName:"Britaniya",CompanyLocation:"Baroda",CompanyGst:85743},
    {CompanyId:105,CompanyName:"Sunfeast",CompanyLocation:"bhavnagar",CompanyGst:65345},
  ]

  lenghts  = new BehaviorSubject<number>(this.companyDetails.length);
  
  add  = new Subject<Company>();


  
  getlenthofdata(){    
      this.lenghts.next(this.companyDetails.length)
  }

  addfav(data:Company){
    this.add.next(data)
  }

  getdata(){
    return this.companyDetails
  }


  

}
