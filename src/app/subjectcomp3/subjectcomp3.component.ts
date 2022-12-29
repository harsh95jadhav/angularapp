import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-subjectcomp3',
  templateUrl: './subjectcomp3.component.html',
  styleUrls: ['./subjectcomp3.component.css']
})
export class Subjectcomp3Component implements OnInit {
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
