import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

submited:boolean = true;
formData:any = {
  username:"",
  email:"",
  password:"",
  course:"",
}


  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    console.log(form);
    this.formData.username =form.value.Username;
    this.formData.email = form.value.email;
    this.formData.password =form.value.password;
    this.formData.course =form.value.Courcess;
    }

}
