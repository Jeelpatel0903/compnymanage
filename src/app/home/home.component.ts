import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { CompnayService } from '../services/compnay.service';
import { BranchService } from '../services/branch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  val:number = 0
  total:number[]=[]
  constructor(private user:UserService,
    private company:CompnayService,
    private branch:BranchService) { }

  ngOnInit(): void {
    this.branch.branchDetails.forEach(e=>{
      // console.log(e);
      this.total.push(Number(e.branchCount))
      // console.log(this.total);
      
      // console.log(this.val += Number(e.branchCount));
      
    })
    for (let index = 0; index < this.total.length; index++) {
      this.val = this.val + this.total[index]
      
    }
  }

  countemployee = this.user.user.length
  countcompany = this.company.companyDetails.length
  countbranch = this.branch.branchDetails.length
  


}
