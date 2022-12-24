import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-servicecomp2',
  templateUrl: './servicecomp2.component.html',
  styleUrls: ['./servicecomp2.component.css']
})
export class Servicecomp2Component implements OnInit {
  products = {};

  constructor(private _demoservices: DemoService) { }

  ngOnInit() {
    this.products = this._demoservices.products;
  }
  onSubscribe(){
    this._demoservices.display();
  }

}
