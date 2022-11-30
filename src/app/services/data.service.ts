import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

currentuser='';

currentacno='';
  constructor() { }
  userDetails:any={
    1001:{acno:1001,username:'Arathi',password:1001,balance:1000,transaction:[]},
    1002:{acno:1002,username:'Amritha',password:1002,balance:2000,transaction:[]},
    1003:{acno:1003,username:'Pallavi',password:1003,balance:4000,transaction:[]}
  }
 register(acno:any,username:any,password:any){
    let userDetails=this.userDetails;

    if(acno in userDetails){
      return false;
    }
    else
    {
      userDetails[acno]={
        acno,
        username,
        password,
        balance:0,
        transaction:[]
      }
      console.log(userDetails);
      return true
    }
 }
 
 login(acno:any,pswd:any){
    let userDetails = this.userDetails;
    if(acno in userDetails){
      if(pswd==userDetails[acno].password){
        this.currentuser=userDetails[acno].username;
        this.currentacno=acno;
        return true
      }
      else{
        return false
      }
    }
    else{
      return false
    }
 }

 deposit(acno:any,pswd:any,amt:any){
  var amount = parseInt(amt);
  let userDetails=this.userDetails;
  if(acno in userDetails){
    if(pswd == userDetails[acno].password){
       userDetails[acno].balance+=amount;
       userDetails[acno].transaction.push({
        Type:'Credit',
        Amount:amount
       })
       console.log(userDetails);
       
       return userDetails[acno].balance;
    }
    else{
      alert('password mismatch');
      return false;
    }
  }
  else{
    alert('Invalid data')
    return false
  }
 }
 
 withdraw(acno:any,pswd:any,amt:any)
 {
    var amount=parseInt(amt);
    let userDetails=this.userDetails;
    if(acno in userDetails)
    {
      if(pswd==userDetails[acno].password)
      {
        if(userDetails[acno].balance>amount)
        {
          userDetails[acno].balance-=amount;
          userDetails[acno].transaction.push({
            Type:'Debit',
            Amount:amount
           })
           console.log(userDetails);
          return userDetails[acno].balance;
        }
        else
        {
          alert('Transaction failed')
        }
        
      }
      else
      {
        return false
        alert('Invalid password')
      }
    }
    else
    {
      return false
      alert('invalid data')
    }
 }
 getTransaction(acno:any)
 {
    return this.userDetails[acno].transaction
 }
}