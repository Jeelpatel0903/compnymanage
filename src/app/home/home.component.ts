import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { CompnayService } from '../services/compnay.service';
import { BranchService } from '../services/branch.service';
import { map, data } from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  val:number = 0
  total:number[]=[]
  countcompany:number=0
  constructor(private user:UserService,
    private company:CompnayService,
    private branch:BranchService) { }

  ngOnInit(): void {
    this.branch.branchDetails.forEach(e=>{
      this.total.push(Number(e.branchCount))
    })
    for (let index = 0; index < this.total.length; index++) {
      this.val = this.val + this.total[index]
    }
    
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.




    // this.company.getlenthofdata()
    this.company.lenghts.subscribe((e)=>{
      this.countcompany = e
      console.log(this.countcompany);
      
      console.log("data number",e);
      
      
    })


  }

  countemployee = this.user.user.length
  
  countbranch = this.branch.branchDetails.length
  


}
