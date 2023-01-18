import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { RapidapiService } from '../services/rapidapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {
finance:any=[];
bbfinance:any=[];
  constructor(private _rapidAPIservice: RapidapiService, private _firebaceService:FirebaseService) { }

  ngOnInit() {
    this._rapidAPIservice.getDataBBFinance().subscribe(res => {
      console.log('rapid finance data',res);
    //  this.finance=res.news;
    //  this.bbfinance=res.quote; 
    })
  }
    createPost(){
    this._firebaceService.createPost().subscribe(res=>{
      console.log('FIREBASE DATA', res);
    
    })
  }
  }


