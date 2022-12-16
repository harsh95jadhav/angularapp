import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { info } from './employee/employdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uid:number;
  ddata:string;
  title = 'angularapp';
  
  getData(ev){
    this.ddata=ev.target.value
  }


 data:string[] = [];

 OnSubmit(form:NgForm){
  console.log(form);
  
 }

// myData:info[]=[
//   {srNo:"1", EmployeName:"ram", companyName:"tata", department:"quality", salary:"20000"},
//   {srNo:"2", EmployeName:"sham", companyName:"tata", department:"quality", salary:"20000"},
//   {srNo:"3", EmployeName:"seeta", companyName:"jata", department:"quality", salary:"20000"},
//   {srNo:"4", EmployeName:"gita", companyName:"tata", department:"quality", salary:"20000"},
// ]



  getdatachild(value): void{
console.log(value);
this.data=value

  }
}
