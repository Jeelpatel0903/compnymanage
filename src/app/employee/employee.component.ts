import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../Model/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  EmployeeData:Employee[]=[]
  constructor(private employeeServices:EmployeeService) { }

  ngOnInit(): void {
  this.EmployeeData = this.employeeServices.getEmployeeDetails()
  }



}
