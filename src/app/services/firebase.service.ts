import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FireBasePost } from '../model/firebasepost';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
url = 'https://angular-curd-f7cdc-default-rtdb.firebaseio.com/';
  constructor(private _httpclient:HttpClient) { }

  createPost(){
    let postData={
      title: 'this is angular 8 crud',
      content: 'This is firebase crud operatin with post'
    }
    return this._httpclient.post(this.url + 'posts.json', postData);
  }
  createPostDataReactiveForm(FireBasePost:FireBasePost){
    return this._httpclient.post(this.url + 'posts.json',FireBasePost);
  }
  getPostDataFirebase(){
    return this._httpclient.get(this.url+ 'posts.json')
  }
}
