import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-serviecomp1',
  templateUrl: './serviecomp1.component.html',
  styleUrls: ['./serviecomp1.component.css']
})
export class Serviecomp1Component implements OnInit {
  products = {};
  
  constructor(private _demoservice: DemoService) { }

  ngOnInit() {
    // for service
    this.products = this._demoservice.products
    // for http observable
    this._demoservice.getUserData().subscribe(ProductData => {
      console.log('data form api', ProductData);
      console.table(ProductData)
      
    })

  }

  onSubscribe(){
    this._demoservice.display();
  }

}
