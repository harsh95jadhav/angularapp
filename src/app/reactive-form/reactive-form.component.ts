import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  submited:boolean = false;
  notAllowedNames = ['codemind', 'technology']
  genders = [
    {id:'1', value:'Male'},
    {id:'2', value:'Female'},

  ]
  myReactiveForm:FormGroup;
  constructor() {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm(){
    this.myReactiveForm = new FormGroup({
      // this.NaNames.bind(this) is used to show the erroe msg for pericular word eg codemind , technolog
      'Username': new FormControl('',[Validators.required,this.NaNames.bind(this)]),
      'email':new FormControl('',[Validators.required, Validators.email]),
      'course':new FormControl('Angular',Validators.required),
      'gender':new FormControl('Male')
    })
  }
  onSubmit(){
    this.submited=true
    console.log(this.myReactiveForm);
    

  }

  NaNames(control:FormControl){
    if(this.notAllowedNames.indexOf(control.value) !== -1){
      return{'namesNotAllowed':true}
    }
    return null
  }

}
