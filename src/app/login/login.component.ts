import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { //(3rd executed)
  //class-collection of properties and functions
  //properties and variables
  //functions/methods-user defined functions  -(4th executed)
  aim = "Your perfect Banking partner";  // String interpolation
  account = "Enter your account no here"  //property binding
  acno = '';
  pswd = '';


  login() {
    // alert("login clicked")    //Event Binding example
    var acno = this.acno;
    var pswd = this.pswd;
    var userDetails = this.ds.userDetails;
    const result = this.ds.login(acno, pswd)
    if (result) {
      alert("Login successfully")
      
      this.router.navigateByUrl('dashboard')//navigateByurl is the method of class router.
      // This router is the property created.This is not the class.
    }
    else {
      alert('Login failed')
    }
  }
  //  dependency injection -ds                 
  constructor(private ds: DataService, private router: Router) { //(first execuetd)
    //it automatically invoked when the object is created
    //object initialization
   

  }

  acnochange(event: any) {
    console.log(event);
    this.acno = event.target.value; //input value come here
    console.log(this.acno);

  }
  pswdchange(event: any) {
    this.pswd = event.target.value;
    console.log(this.pswd);

  }


  ngOnInit(): void { //(second executed)
    //its a life cycle hooks of angular
    //when the component is created at same time it will intialize  or authorize
  }

  // login(a:any,p:any){
  //   // alert("login clicked")    //Event Binding example
  //    var accno=a.value;
  //    var psd=p.value;
  //    var user_dt=this.userDetails;

  //    if(accno in user_dt){
  //      if(psd == user_dt[accno].password){
  //       alert("Login successfully")
  //      }
  //      else{
  //       alert('Incorrect password')
  //      }
  //    }
  //    else{
  //     alert('Invalid AccountNo')
  //    }
  // }

}
