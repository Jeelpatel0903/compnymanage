import { Injectable } from '@angular/core';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user: User[] = [
    { Userid: 1, Username: "Jeel", Userpassword: "123456", Userroll: "Basic-User", islogin: false , Permission:["employee"]},
    { Userid: 2, Username: "Arjun", Userpassword: "00000", Userroll: "Basic-User", islogin: false ,Permission:["employee"]},
    { Userid: 3, Username: "Manthan", Userpassword: "1234", Userroll: "Basic-User", islogin: false ,Permission:["employee"]},
    { Userid: 4, Username: "Alvi", Userpassword: "456789", Userroll: "Basic-User", islogin: false ,Permission:["employee"]},
    { Userid: 5, Username: "Ayuhsi", Userpassword: "123456", Userroll: "Basic-User", islogin: false,Permission:["employee"]},
  ]

}
