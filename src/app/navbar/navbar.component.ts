import { Component, Input, OnInit } from '@angular/core';
import { User } from '../Model/User';
import { AuthserviceService } from '../services/authservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  getdata:User | null = null
  username:string | null = null
  constructor(private auth:AuthserviceService) { }

  ngOnInit(): void {
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

      }
      this.auth.logout()
    });
  }
}
