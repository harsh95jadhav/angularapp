import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  // hardcode for service
  products = [
    {name: 'laptop',id: '101'},
    {name: 'TV',id: '102'},
    {name: 'Mobile',id: '103'},
  ]

url = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http:HttpClient) { }
  // this method for server
  display(){
    alert('subscribe successfully')
  }
  // this method for http observable
  getUserData(): Observable<any>{
    return this.http.get(this.url)

  }
}
