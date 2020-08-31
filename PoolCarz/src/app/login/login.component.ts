import { RestServiceService } from './../Services/rest-service.service';
import { Component, OnInit } from '@angular/core';
import {Login} from './Login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login=new Login();
  userValid:boolean;
  users:any[];
  errorMessage:string;
  constructor(private _restService:RestServiceService,private router:Router) { 
    this._restService.getUsers().subscribe(
      users => this.users=users,
      error => this.errorMessage=error
    );

  }

  ngOnInit(): void {
    sessionStorage.clear();
    
  }
  onSubmit(){
        const username=this.login.userName;
        const password=this.login.password;
        const user=this.users.filter(item => item.userName==username && item.password==password)[0];
        if(user){
          sessionStorage.setItem('userName',username);
          this.userValid=true;
          this.router.navigate(['/book-ride']);
        }
        else{
          this.userValid=false;
        }
        
       }
  }

