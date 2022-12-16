import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myReactiveForm:FormGroup;
  constructor() {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm(){
    this.myReactiveForm = new FormGroup({
      'Username': new FormControl('',Validators.required),
      'email':new FormControl('email',[Validators.required,Validators.email])
    })
  }
  onSubmit(){
    console.log(this.myReactiveForm);
    
  }

}
