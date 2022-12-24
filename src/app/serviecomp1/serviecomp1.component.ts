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
    this.products = this._demoservice.products
  }

  onSubscribe(){
    this._demoservice.display();
  }

}
