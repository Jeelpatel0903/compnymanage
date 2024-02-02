import { Component, Input, OnInit } from '@angular/core';
import { User } from '../Model/User';
import { AuthserviceService } from '../services/authservice.service';
import Swal from 'sweetalert2';
import { NavigationStart, Router ,Event, NavigationEnd, NavigationCancel, ActivatedRoute } from '@angular/router';
import { CompnayService } from '../services/compnay.service';
import { Company } from '../Model/Compnay';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  getdata:User | null = null
  username:string | null = null
  showeloader:boolean = false
  jeel:string | null = null
  
  data!:Company
  constructor(private auth:AuthserviceService,private router:Router,private active:ActivatedRoute,private service:CompnayService) { }

  ngOnInit(): void {
    const data = sessionStorage.getItem('logiser')


    this.router.events.subscribe((routerevent : Event)=>{
      if(routerevent instanceof NavigationStart){
          this.showeloader = true
      }
      if(routerevent instanceof NavigationCancel){
        this.showeloader = false
    }
      if(routerevent instanceof NavigationEnd){
            this.showeloader = false
        }
    })

    this.service.add.subscribe(e=>{

      this.data=e
      this.jeel = this.data.CompanyName
    })
  



    const userdata = sessionStorage.getItem('loguser')
    
    if(userdata){
      this.getdata = JSON.parse(userdata)
      this.username = this.getdata?.Username || null
    }

   


  }


  

  logout(){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        this.auth.logout()
      }
    });
  }
}
