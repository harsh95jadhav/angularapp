import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-subjectcomp2',
  templateUrl: './subjectcomp2.component.html',
  styleUrls: ['./subjectcomp2.component.css']
})
export class Subjectcomp2Component implements OnInit {
  username;
  constructor(private _UtilityService:UtilityService) {
    this._UtilityService.username.subscribe(res =>{
      this.username = res;
    })
   }

  ngOnInit() {
  }
  UpdateUserName(uname){
    console.log(uname.value);
    this._UtilityService.username.next(uname.value)
    

  }
}
