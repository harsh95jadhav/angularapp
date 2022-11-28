import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { instrument } from '../electronic/instrument';

@Component({
  selector: 'app-structurala-ass',
  templateUrl: './structurala-ass.component.html',
  styleUrls: ['./structurala-ass.component.css']
})
export class StructuralaAssComponent implements OnInit {

  clicked: boolean = false;
  title: string= 'ELECTRONIC INSTRUMENTS';
  server:string= " clicked";
  allowser:boolean = false;
  selectedCourse:string ;
  // laptop1:string ="assts/laptop.png" ;
  // mobile1:string="assets/mobile.png";
  // washing1:string="assets/washing machine.png";
  // ac1:string="air-conditoner.png";

  instruments :instrument[]=[
    // {productImage:'{{laptop1}}'}
    {srNo: "1", productImage:"assets/laptop.png", productName:"laptop",ID:"pro1",prise:'30000'},
    {srNo: "2" ,productImage:"assets/mobile.png",productName:"mobile",ID:"pro2",prise:'10000'},
    {srNo: "3" ,productImage:"assets/washing machine.png",productName:"washing machine",ID:"pro3",prise:'15000'},
    {srNo: "4" ,productImage:"assets/air-conditioner.png",productName:"AC",ID:"pro4",prise:'20000'},
  ]
  
  constructor() { }
    
  onMethod(){
   if (this.clicked==true) {
        this.clicked = false;
   } else {
       this.clicked = true;
   }
  }
  getCourseValue (Value){
    this.selectedCourse = Value.target.value;

  }
  ngOnInit() {
  }

}
