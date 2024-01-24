import { Component, Input, OnInit } from '@angular/core';
import { User } from '../Model/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() roll:string | null = null
  getdata:User | null = null
  username:string | null = null
  constructor() { }

  ngOnInit(): void {
    const userdata = localStorage.getItem('loguser')
    
    if(userdata){
      this.getdata = JSON.parse(userdata)
      this.username = this.getdata?.Username || null
    }
  }
}
