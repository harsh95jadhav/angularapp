import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterpipe',
  templateUrl: './filterpipe.component.html',
  styleUrls: ['./filterpipe.component.css']
})
export class FilterpipeComponent implements OnInit {
  nameserch:string = '';
  productArr: any[] = [
    {
      sno:1,
      name:'Mobile',
      price:'70000rs',
      availability: 'Available'
    },
    {
      sno:2,
      name:'TV',
      price:'5000rs',
      availability: 'Available'
    },
    {
      sno:3,
      name:'washing Machine',
      price:'85000rs',
      availability: 'Not Available'
    },
    {
      sno:4,
      name:'Tab',
      price:'70000rs',
      availability: 'Available'
    },

  ]
  constructor() { }

  ngOnInit() {
  }

}
