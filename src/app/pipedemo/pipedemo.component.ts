import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
 price:number = 80000;
  todaysDate = new Date();
obser;
obj= {id:'123', name:'john'}
  constructor(private _UtilityService: UtilityService) {
    this.obser = this._UtilityService.username;
   }

  ngOnInit() {
  }

}
