import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

url ='https://yh-finance.p.rapidapi.com/auto-complete?q=tesla';
  constructor(private httpclient:HttpClient) { }

  getDataBBFinance(){
    let headers = new HttpHeaders({
      'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
      'X-RapidAPI-Key' : 'e58535b467msh73e0244713081aep12b84cjsn2fba27130d61'
    })
   return this.httpclient.get(this.url,{ headers: headers});
  }
}
