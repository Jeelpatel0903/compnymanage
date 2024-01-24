import { Component, OnInit } from '@angular/core';
import { Company } from '../Model/Compnay';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  CompanyData:Company[]=[
   ]

   userroll:string | null = null
  constructor(private acive:ActivatedRoute) { }

  ngOnInit(): void {
   this.userroll =  this.acive.snapshot.queryParamMap.get('userlroll')
  }

  

}
