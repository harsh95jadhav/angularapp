import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FireBasePost } from '../model/firebasepost';
import { FirebaseService } from '../services/firebase.service';

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
  firebasepost:FireBasePost;
  constructor(private _firebaseservice:FirebaseService) {
    this.createForm();
   }

  ngOnInit() {
    this._firebaseservice.getPostDataFirebase().subscribe(res =>{
      console.log('get data from firebase',res);
      
    })
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
    // console.log(this.myReactiveForm);
    this.firebasepost=new FireBasePost();
    this.firebasepost.Username=this.myReactiveForm['controls'].Username.value;
    this.firebasepost.email=this.myReactiveForm['controls'].email.value;
    this.firebasepost.course=this.myReactiveForm['controls'].course.value;
    this.firebasepost.gender=this.myReactiveForm['controls'].gender.value;
    // console.log(this.firebasepost);
    


   this._firebaseservice.createPostDataReactiveForm(this.firebasepost).subscribe(res=>{
    console.log('post from reactive form',res);
    
   })

  }

  NaNames(control:FormControl){
    if(this.notAllowedNames.indexOf(control.value) !== -1){
      return{'namesNotAllowed':true}
    }
    return null
  }

}
