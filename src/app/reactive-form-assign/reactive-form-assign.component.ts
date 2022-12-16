import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-assign',
  templateUrl: './reactive-form-assign.component.html',
  styleUrls: ['./reactive-form-assign.component.css']
})
export class ReactiveFormAssignComponent implements OnInit {
  myReactiveForm:FormGroup;
  constructor() {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm(){
    this.myReactiveForm = new FormGroup({
      'email': new FormControl('',Validators.required)

    })
  }

}
