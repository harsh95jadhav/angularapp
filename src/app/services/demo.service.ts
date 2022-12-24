import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  products = [
    {name: 'laptop',id: '101'},
    {name: 'TV',id: '102'},
    {name: 'Mobile',id: '103'},
  ]

  constructor() { }
  display(){
    alert('subscribe successfully')
  }
}
