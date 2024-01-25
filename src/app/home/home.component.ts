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

  constructor(private user:UserService,
    private company:CompnayService,
    private branch:BranchService) { }

  ngOnInit(): void {
  }

  countemployee = this.user.user.length
  countcompany = this.company.companyDetails.length
  countbranch = this.branch.branchDetails.length

}
