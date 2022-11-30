import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb:FormBuilder,private ds: DataService, private router: Router) { }
   //regitration model

    registerform=this.fb.group({
      acno:[''],
      uname:[''],
      pswd:['']
    })
//control pass to ts to html file

 
  acno = '';
  uname = '';
  pswd = '';

  register() {
    console.log(this.registerform);
    
    //  alert("register clicked");
    var username = this.registerform.value.uname;
    var acno = this.registerform.value.acno;
    var pswd = this.registerform.value.pswd;
    var userDetails = this.ds.userDetails;
    const result = this.ds.register(acno, username, pswd)
    
      if (result) {
        alert('Register Successfully');
        console.log(result);
        
        this.router.navigateByUrl('');
      }
      else {
        alert('User Already Registered');
        this.router.navigateByUrl('register');
      }
    }
  }

