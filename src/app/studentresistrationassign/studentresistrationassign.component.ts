import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { data } from '../model/forme';

@Component({
  selector: 'app-studentresistrationassign',
  templateUrl: './studentresistrationassign.component.html',
  styleUrls: ['./studentresistrationassign.component.css']
})
export class StudentresistrationassignComponent implements OnInit {
  defaultValue: string = "Angular";
ddata= new data();
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
// console.log(form.value.FirstName);

  console.log(form);
    
  this.ddata.firstname = form.value.FirstName;
  this.ddata.middlename = form.value.MiddleName;
  this.ddata.lastname = form.value.LastName;
  this.ddata.courses = form.value.course;
  this.ddata.address = form.value.useDetails.address;
  this.ddata.city = form.value.useDetails.city;
  this.ddata.state = form.value.useDetails.state;


this.saveEmployeeData(this.ddata);
  }

  saveEmployeeData(dd:data){
    console.log(dd.firstname);
    console.log(dd.middlename);
    console.log(dd.lastname);
    console.log(dd.courses);
    console.log(dd.address);
    console.log(dd.city);
    console.log(dd.state);

  // //   console.log();
    
  
    
  }
}