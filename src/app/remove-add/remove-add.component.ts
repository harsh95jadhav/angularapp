import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-add',
  templateUrl: './remove-add.component.html',
  styleUrls: ['./remove-add.component.css']
})
export class RemoveAddComponent implements OnInit {
  member:string
members:string[]=[];

  

  clickToAdd(){
    this.members.push(this.member)

  }
  removeItem(value){
  this.members.pop()
  }

  constructor() { }
  
  ngOnInit() {}

  

}
