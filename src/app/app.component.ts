import { Component, OnInit } from '@angular/core';
import { Router,Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'compnymanage';
  showeloader:boolean = false
  constructor(private router:Router){}

ngOnInit(): void {  
  this.router.events.subscribe((routerevent : Event)=>{
    if(routerevent instanceof NavigationStart){
      setTimeout(() => {
        this.showeloader = true
      }, 3000);
    }
    if(routerevent instanceof NavigationEnd || routerevent instanceof NavigationCancel || routerevent instanceof  NavigationError){
      this.showeloader = false
    }
  })
}
}
