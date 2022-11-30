import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

user=''
constructor(private ds: DataService){
  this.user=this.ds.currentuser
}
acno='';
pswd='';
amount='';

deposit(){
  // alert('button clicked')
  var acno=this.acno;
  var pswd=this.pswd;
  var amount=this.amount;
  const result=this.ds.deposit(acno,pswd,amount);
  if(result){
    alert(`${amount} is credited...Available balance is ${result}`)
  }
}
//withdraw properties

acno1='';
pswd1='';
amount1='';

withdraw(){
  //  alert('button clicked')
  var acno=this.acno1;
  var pswd=this.pswd1;
  var amount=this.amount1;
  const result=this.ds.withdraw(acno,pswd,amount);
  if(result)
  {
    alert(`${amount} is debited...Available balance is ${result}`)
  }
  else
  {
    alert('Error')
  }
}
}
