import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-subjectcomp1',
  templateUrl: './subjectcomp1.component.html',
  styleUrls: ['./subjectcomp1.component.css']
})
export class Subjectcomp1Component implements OnInit {
  username;
  constructor(private _UtilityService: UtilityService) {
    this._UtilityService.username.subscribe(res =>{
      this.username = res;
    })

   }

  ngOnInit() {
  }

  UpdateUserName(uname){
    // pass the object insted of string
    // var emp={
    //   name:'harsh',
    //   id:'123'
    // }
    console.log(uname.value);
    // next method is used for pass the message to observale i.e username
    this._UtilityService.username.next(uname.value);
    // pass the object insted of string then use joson.stringify bcos it convet data from object to string
    // this._UtilityService.username.next(JSON.stringify(emp))

    

  }

}
