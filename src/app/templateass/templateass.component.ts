import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateass',
  templateUrl: './templateass.component.html',
  styleUrls: ['./templateass.component.css']
})
export class TemplateassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
  console.log(form);

  }


      
    
  
 

}
