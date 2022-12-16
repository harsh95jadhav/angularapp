import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simpletemplateform',
  templateUrl: './simpletemplateform.component.html',
  styleUrls: ['./simpletemplateform.component.css']
})
export class SimpletemplateformComponent implements OnInit {
  defaultgender:string ="Male";
  defaultvalue:string = "Angular";
  genders=[
{id:'1', value:'Male'},
{id:'2', value:'Female'}
  ]
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
  console.log(form);
  
  }

}
