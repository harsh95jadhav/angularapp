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
    console.log(uname.value);
    this._UtilityService.username.next(uname.value);
    

  }

}
