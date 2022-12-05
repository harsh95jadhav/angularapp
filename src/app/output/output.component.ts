import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { info } from '../employee/employdata';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
@Output() custData: EventEmitter<object> = new EventEmitter<object>();
  constructor() { }

  array:info[]=[
    {srNo:"1", EmployeName:"Kishor Deshmukh", companyName:"Helvote rubber", department:"R&d", salary:"25000"},
  {srNo:"2", EmployeName:"John philips", companyName:"Tata Motors", department:"Quality", salary:"20000"},
  {srNo:"3", EmployeName:"Seeta Desai", companyName:"Flurotech Engg", department:"Production", salary:"30000"},
  {srNo:"4", EmployeName:"Sam ", companyName:"TATA", department:"Design", salary:"40000"},
  ]
  getValue(){
   this.custData.emit(this.array)
  }

  ngOnInit() {
  }

}
