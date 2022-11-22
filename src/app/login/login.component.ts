import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { //(3rd executed)
  //class-collection of properties and functions
  //properties and variables
  //functions/methods-user defined functions  -(4th executed)
  aim="Your perfect Banking partner";  // String interpolation
  account="Enter your account no here"  //property binding
  acno='';
  pswd='';
  
  userDetails:any={
    1000:{accountno:1000,username:'arathi',password:1000},
    1001:{accountno:1001,username:'amritha',password:1001},
    1002:{accountno:1002,username:'pallavi',password:1002}
  }
  
  constructor(){ //(first execuetd)
 //it automatically invoked when the object is created
 //object initialization
 
}
acnochange(event:any){
  console.log(event);
  this.acno=event.target.value; //input value come here
  console.log(this.acno);
  
}
pswdchange(event:any){
  this.pswd=event.target.value;
  console.log(this.pswd);
  
}

ngOnInit():void{ //(second executed)
  //its a life cycle hooks of angular
  //when the component is created at same time it will intialize  or authorize
}
// 

login(a:any,p:any){
  // alert("login clicked")    //Event Binding example
   var accno=a.value;
   var psd=p.value;
   var user_dt=this.userDetails;

   if(accno in user_dt){
     if(psd == user_dt[accno].password){
      alert("Login successfully")
     }
     else{
      alert('Incorrect password')
     }
   }
   else{
    alert('Invalid AccountNo')
   }
}


}
