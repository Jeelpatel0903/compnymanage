import { Injectable } from '@angular/core';
import { Employee } from '../Model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  index:number = 0
  employee: Array<Employee>=[]
  constructor() {
    this.employee.push(...[new Employee({
      id:this.index = this.index+1,
      name:"jeel",
      gst:"1234KALSKS2"
    }),
    new Employee({
      id:this.index = this.index+1,
      name:"Arjun",
      gst:"1234KALSKS2"
    }),
    new Employee({
      id:this.index = this.index+1,
      name:"Manthan",
      gst:"1234KALSKS2"
    })
    ])
   }

   getEmployeeDetails(){
    return this.employee
   }
}
